import { useFieldArray, useForm } from "react-hook-form";
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
import { individualAccountSchema } from "../validations/individualAccount.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { alertErrors } from "../utils/handleError";
import { toast } from "react-toastify";

const IndividualAccount = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(individualAccountSchema),
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

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mb-4">
      <div className="header bg-[#b41421] text-white p-3 mb-5">
        <h1 className="text-xl font-bold px-3">OPEN AN INDIVIDUAL ACCOUNT</h1>
      </div>
      <div className="container mx-auto lg:w-4/6 bg-white">
        <div className="p-5">
          <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <PersonalDetails
              register={register}
              setValue={setValue}
              errors={errors}
            />
            <ContactAddress register={register} errors={errors} />
            <EmploymentDetails
              register={register}
              errors={errors}
              setValue={setValue}
            />
            <NextOfKin
              register={register}
              errors={errors}
              setValue={setValue}
            />
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
            <BankAccountDetails
              register={register}
              errors={errors}
              setValue={setValue}
            />
            <SignatoryMandate
              register={register}
              fields={signatoryList}
              setValue={setValue}
              append={appendSignatory}
              remove={removeSiginatory}
              errors={errors}
            />
            <KycDocuments
              register={register}
              setValue={setValue}
              errors={errors}
            />
            <div className="pt-16 text-right p-5">
              <button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600 font-semibold px-6 py-2 rounded-full"
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

export default IndividualAccount;
