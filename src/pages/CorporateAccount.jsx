import AuthorizedPersons from "../components/account/AuthorizedPersons";
import BankAccountDetails from "../components/account/BankAccountDetails";
import ContactAddress from "../components/account/ContactAddress";
import CorporateDetails from "../components/account/CorporateDetaills";
import InvestmentDetails from "../components/account/InvestmentDetails";
import KycDocuments from "../components/account/KycDocuments";
import SignatureMandate from "../components/account/SignatureMandate";

const CorporateAccount = () => {
  return (
    <div className="my-4">
      <div className="container mx-auto lg:w-4/6">
        <div className="header bg-[#b41421] text-white">
          <h1>Open an Individual Account</h1>
        </div>
        <div className="p-5 bg-white">
          <form>
            <CorporateDetails />
            <ContactAddress />
            <AuthorizedPersons />
            <InvestmentDetails />
            <BankAccountDetails />
            <SignatureMandate />
            <KycDocuments />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorporateAccount;
