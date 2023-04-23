import { toast } from "react-toastify";
import AuthorizedPersons from "../components/account/AuthorizedPersons";
import BankAccountDetails from "../components/account/BankAccountDetails";
import ContactAddress from "../components/account/ContactAddress";
import EmploymentDetails from "../components/account/EmploymentDetails";
import InvestmentDetails from "../components/account/InvestmentDetails";
import KycDocuments from "../components/account/KycDocuments";
import NextOfKin from "../components/account/NextOfKin";
import PepStatus from "../components/account/PepStatus";
import PersonalDetails from "../components/account/PersonalDetails";
import SignatoryMandate from "../components/account/SignatoryMandate";
import { alertErrors } from "../utils/handleError";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { jointAccountSchema } from "../validations/jointAccount.schema";
import axios from "axios";

const JointAccount = () => {
  const {
    formState: { errors },
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

  useEffect(() => {
    if (!(Object.keys(errors).length === 0)) {
      const { signatory, authorizedPerson, ...newErrors } = errors;

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

      alertErrors(newErrors, toast);
    }

    console.log(errors);
  }, [errors]);

  const onSubmit = async (data) => {
    const response = await postData(data);
    console.log(response);
  };

  const postData = async (data) => {
    const formData = getFormData(data);
    console.log(formData);
    try {
      const response = await axios.post(
        "/api/account/joint",
        {
          ...formData,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response;
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
            <PersonalDetails register={register} setValue={setValue} errors={errors} />
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

            <div className="pt-16 text-right p-5">
              <button
                type="submit"
                className="bg-[#b41421] text-white hover:bg-[#6d7275] hover:text-[#ecebf3] font-semibold px-6 py-2 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JointAccount;
