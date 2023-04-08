import CalendarIcon from "../CalendarIcon";

const CorporateDetails = () => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl mt-10 mb-5">
        <h1>Corporate Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900">
        <div className="pb-3">
          <label className="relative block">
            <input
              className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
              placeholder="Company Name"
              type="text"
              name="companyName"
            />
          </label>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
          <div>
            <label className="relative block">
              <input
                className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
                placeholder="RC No"
                type="text"
                name="rcNum"
              />
            </label>
          </div>

          <div className="relative block">
            <CalendarIcon />
            <input
              type="text"
              className="placeholder:text-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
              placeholder="Date of Inc."
              name="dateofInc"
              onFocus={(e) => {
                e.target.type = "date";
                // e.target.value = "2013-05-29";
              }}
            />
          </div>

          <div>
            <label className="relative block">
              <input
                className="placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
                placeholder="TIN"
                type="text"
                name="tin"
              />
            </label>
          </div>

          <div>
            <label className="relative block">
              <input
                className="placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
                placeholder="Account Number"
                type="text"
                name="corpAccountNumber"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateDetails;
