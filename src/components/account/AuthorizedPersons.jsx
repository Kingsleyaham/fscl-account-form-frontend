import { FcPlus } from "react-icons/fc";
import Signatory from "../Signatory";

const AuthorizedPersons = () => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Authorized Persons</h1>
      </div>
      <div className="float-right">
        <FcPlus className="block text-3xl cursor-pointer mt-4" />
      </div>

      <div className="bg-white p-5 pt-0 shadow-sm text-gray-900">
        <div>
          <Signatory index={1} />
        </div>
      </div>
    </div>
  );
};

export default AuthorizedPersons;
