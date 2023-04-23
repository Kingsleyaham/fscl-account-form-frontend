import CalendarIcon from "../CalendarIcon";

const CorporateDetails = ({ register, setValue, errors }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl mt-10 mb-5">
        <h1>Corporate Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900">
        <div className="pb-3">
          <label className="relative block">
            <input
              className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                errors?.companyName ? "border-[#b41421]" : "border-slate-300"
              }`}
              placeholder="Company Name"
              type="text"
              {...register("companyName")}
            />
          </label>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
          <div>
            <label className="relative block">
              <input
                className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors?.rcNum ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="RC No"
                type="text"
                {...register("rcNum")}
              />
            </label>
          </div>

          <div className="relative block">
            <CalendarIcon />
            <input
              type="text"
              className={`placeholder:text-slate-600 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ${
                errors?.dateOfInc ? "border-[#b41421]" : "border-slate-300"
              }`}
              placeholder="Date of Inc."
              name="dateOfInc"
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onChange={(e) =>
                setValue("dateOfInc", e.target.value, {
                  shouldValidate: true,
                })
              }
            />
          </div>

          <div>
            <label className="relative block">
              <input
                className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors?.tin ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="TIN"
                type="text"
                {...register("tin")}
              />
            </label>
          </div>

          <div>
            <label className="relative block">
              <input
                className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors?.corpAccountNumber ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Account Number"
                type="text"
                {...register("corpAccountNumber")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateDetails;
