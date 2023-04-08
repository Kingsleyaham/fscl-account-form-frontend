import { IoCloseCircle } from "react-icons/io5";

const Signatory = ({ index }) => {
  return (
    <div className="border-b p-5 rounded-md ">
      <p className="font-bold text-slate-700">Signatory {index}</p>
      <div className="py-3">
        <label className="relative block">
          <input
            className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
            placeholder="Full Name"
            type="text"
            name={`signatoryName${index}`}
          />
        </label>
      </div>
      <div className="py-2">
        <label className="relative block">
          <input
            className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
            placeholder="Contact Address"
            type="text"
            name={`signatoryName${index}Address`}
          />
        </label>
      </div>

      <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
        <div>
          <label className="relative block">
            <input
              className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
              placeholder="Mobile Number"
              type="text"
              name="signatoryNum1"
            />
          </label>
        </div>
        <div>
          <label className="relative block">
            <input
              className="placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
              placeholder="Bank Verification Number"
              type="text"
              name="signatory1Bvn"
            />
          </label>
        </div>
        <div className="py-2">
          <label className="relative block">
            <input
              className="placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
              placeholder="Email Address"
              type="text"
              name="Signatory1Email"
            />
          </label>
        </div>
        <div>
          <select
            id={`signatoryClass${index}`}
            className="border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected disabled>
              Means of Identification
            </option>
            <option defaultValue="national id">National ID</option>
            <option defaultValue="drivers license">Driver's License</option>
            <option defaultValue="International passport">
              International Passport
            </option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-600 pb-3">
            Upload Passport
          </p>
          <div className="flex items-center space-x-6">
            <label>
              <input
                type="file"
                className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-[#ecebf3] file:text-[#b41421]
            hover:file:cursor-pointer hover:file:bg-gray-50
            hover:file:text-[#6d7275]
          "
              />
            </label>
            <IoCloseCircle className="text-[#b41421] text-xl shadow-lg shadow-[#d5c7d6] rounded-full cursor-pointer hidden" />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-slate-600 pb-3">
            Upload Signature
          </p>
          <div className="flex items-center space-x-6">
            <label>
              <input
                type="file"
                className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-[#ecebf3] file:text-[#b41421]
            hover:file:cursor-pointer hover:file:bg-gray-50
            hover:file:text-[#6d7275]
          "
              />
            </label>
            <span className="hidden cursor-pointer">
              <IoCloseCircle className="text-[#b41421] text-xl shadow-lg shadow-[#d5c7d6] rounded-full" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signatory;
