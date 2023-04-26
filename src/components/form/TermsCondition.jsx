import FCSLTermsAndCondition from "../../assets/FCSL_ACCOUNT_OPENING_FORM_T&C.pdf";

const TermsCondition = ({ register, errors }) => {
  return (
    <div className="flex pt-6 items-start px-6 text-gray-700">
      <div>
        <input
          type="checkbox"
          className={`bg-[#c7d6d5] ${
            errors.termsAndCondition ? "border-[#b41421]" : "border-[#c7d6d5]"
          }  text-[#b41421] focus:ring-[#ecebf3] w-5 h-5`}
          {...register("termsAndCondition")}
        />
      </div>
      <div className="pl-4 text-[15px]">
        By completing and signing this form, you agree to be bound by the{" "}
        <a
          href={FCSLTermsAndCondition}
          className="font-medium underline text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          terms and conditions
        </a>{" "}
        of FCSL Asset Management Company Ltd.
      </div>
    </div>
  );
};

export default TermsCondition;
