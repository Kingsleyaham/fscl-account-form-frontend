import AuthorizedPersons from "../components/account/AuthorizedPersons";
import BankAccountDetails from "../components/account/BankAccountDetails";
import ContactAddress from "../components/account/ContactAddress";
import EmploymentDetails from "../components/account/EmploymentDetails";
import InvestmentDetails from "../components/account/InvestmentDetails";
import KycDocuments from "../components/account/KycDocuments";
import NextOfKin from "../components/account/NextOfKin";
import PepStatus from "../components/account/PepStatus";
import PersonalDetails from "../components/account/PersonalDetails";
import SignatureMandate from "../components/account/SignatureMandate";

const JointAccount = () => {
  return (
    <div className="my-4">
      <div className="container mx-auto lg:w-4/6 p-5 bg-white">
        <form>
          <PersonalDetails />
          <ContactAddress />
          <EmploymentDetails />
          <NextOfKin />
          <PepStatus />
          <AuthorizedPersons />
          <InvestmentDetails />
          <BankAccountDetails />
          <SignatureMandate />
          <KycDocuments />
        </form>
      </div>
    </div>
  );
};

export default JointAccount;
