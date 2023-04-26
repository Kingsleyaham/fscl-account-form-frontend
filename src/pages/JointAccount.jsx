import { toast } from "react-toastify";
import AuthorizedPersons from "../components/account/AuthorizedPersons";
import BankAccountDetails from "../components/account/BankAccountDetails";
import ContactAddress from "../components/account/ContactAddress";
import EmploymentDetails from "../components/account/EmploymentDetails";
import InvestmentDetails from "../components/account/InvestmentDetails";
import KycDocuments from "../components/account/KycDocuments";
import NextOfKin from "../components/account/NextOfKin";
import PepStatus from "../components/account/PepStatus";
import SignatoryMandate from "../components/account/SignatoryMandate";
import { alertErrors } from "../utils/handleError";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { jointAccountSchema } from "../validations/jointAccount.schema";
import axios from "axios";
import PopupModal from "../components/PopupModal";
import TermsCondition from "../components/form/TermsCondition";
import SubmitBtn from "../components/form/SubmitBtn";
import JointPersonalDetails from "../components/account/JointPersonalDetails";

const JointAccount = () => {
  const [open, setOpen] = useState(false);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(jointAccountSchema),
    defaultValues: {
      signatory: [{ name: "", designation: "", class: "", signature: [] }],
      authorizedPerson: [
        {
          name: "",
          address: "",
          mobileNum: "",
          email: "",
          bvn: "",
          identification: "",
          passport: [],
          signature: [],
        },
      ],
      personalDetails: [
        {
          tittle: "",
          firstName: "",
          middleName: "",
          surname: "",
          gender: "",
          maritalStatus: "",
          dateOfBirth: "",
          motherMaidenName: "",
          profession: "",
          country: "",
          stateOfOrigin: "",
          lga: "",
        },
      ],
    },
  });

  const {
    fields: signatoryList,
    append: appendSignatory,
    remove: removeSiginatory,
  } = useFieldArray({
    control,
    name: "signatory",
  });

  const {
    fields: authorizedList,
    append: appendAuthorized,
    remove: removeAuthorized,
  } = useFieldArray({
    control,
    name: "authorizedPerson",
  });

  const {
    fields: persDetailsList,
    append: appendPersDetails,
    remove: removePersDetails,
  } = useFieldArray({
    control,
    name: "personalDetails",
  });

  useEffect(() => {
    if (!(Object.keys(errors).length === 0)) {
      const { signatory, authorizedPerson, personalDetails, ...newErrors } = errors;

      if (errors.signatory) {
        newErrors.signatory = {
          message: "Signatory Mandate fields are required",
        };
      }

      if (errors.authorizedPerson) {
        newErrors.authorizedPerson = {
          message: "Authorized Persons fields are required",
        };
      }
      if (errors.personalDetails) {
        newErrors.personalDetails = {
          message: "Authorized Persons fields are required",
        };
      }

      alertErrors(newErrors, toast);
    }

    console.log(errors);
  }, [errors]);

  const onSubmit = async (data) => {
    console.log(data);
    const response = await postData(data);

    console.log(response);

    if (response) {
      setOpen(true);
      setTimeout(() => {
        window.location.href = "https://www.fcslng.com/";
      }, 2000);
    }
  };

  const postData = async (data) => {
    const formData = getFormData(data);
    console.log(formData);
    if (process.env.NODE_ENV !== "development") {
      axios.defaults.baseURL = "https://fcsl-account-form.onrender.com";
    }
    try {
      const response = await axios.post(
        "/api/account/joint",
        {
          ...formData,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getFormData = (data) => {
    const signatorySignatures = {};
    const authorizedImg = {};

    const { signatory, authorizedPerson } = data;

    // extract uploaded signatures from signatory array
    signatory.forEach((elem, index) => {
      signatorySignatures[`signatorySignature${index}`] = elem.signature;
    });

    // extract signature and passport from authorized person array
    authorizedPerson.forEach((elem, index) => {
      authorizedImg[`authorizedSignature${index}`] = elem.signature;
      authorizedImg[`authorizedPassport${index}`] = elem.passport;
    });

    const formData = {
      ...data,
      ...signatorySignatures,
      ...authorizedImg,
      accountType: "joint",
    };

    return formData;
  };

  return (
    <div className="mb-4">
      <div className="header bg-[#b41421] text-white p-3 mb-5">
        <h1 className="text-xl font-bold px-3">OPEN A JOINT ACCOUNT</h1>
      </div>
      <div className="container mx-auto lg:w-4/6 bg-white">
        <div className="p-5">
          <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <JointPersonalDetails
              register={register}
              setValue={setValue}
              errors={errors}
              fields={persDetailsList}
              append={appendPersDetails}
              remove={removePersDetails}
            />
            <ContactAddress register={register} errors={errors} />
            <EmploymentDetails register={register} errors={errors} setValue={setValue} />
            <NextOfKin register={register} errors={errors} setValue={setValue} />
            <PepStatus register={register} errors={errors} />
            <AuthorizedPersons
              register={register}
              fields={authorizedList}
              setValue={setValue}
              append={appendAuthorized}
              remove={removeAuthorized}
              errors={errors}
            />
            <InvestmentDetails register={register} errors={errors} />
            <BankAccountDetails register={register} errors={errors} setValue={setValue} />
            <SignatoryMandate
              register={register}
              fields={signatoryList}
              setValue={setValue}
              append={appendSignatory}
              remove={removeSiginatory}
              errors={errors}
            />
            <KycDocuments register={register} setValue={setValue} errors={errors} />
            <TermsCondition register={register} errors={errors} />

            <div className="pt-16 text-right p-5">
              <SubmitBtn isSubmitting={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
      {open && <PopupModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default JointAccount;
