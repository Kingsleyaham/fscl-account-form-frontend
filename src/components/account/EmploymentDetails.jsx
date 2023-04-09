import CalendarIcon from "../CalendarIcon";

const EmploymentDetails = ({ register, errors, setValue }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Employment Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900 pb-14">
        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
          <div>
            <select
              className={`border text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                errors.employmentStatus
                  ? "border-[#b41421]"
                  : "border-slate-300"
              }`}
              onChange={(e) => {
                setValue("employmentStatus", e.target.value, {
                  shouldValidate: true,
                });
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Employment Status
              </option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="retire">Retiree</option>
            </select>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors?.employerName ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Employer's Name"
                {...register("employerName")}
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.industry ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Industry"
                {...register("industry")}
                type="text"
              />
            </label>
          </div>

          <div className="relative">
            <CalendarIcon />
            <input
              type="text"
              className={`placeholder:text-slate-600 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ${
                errors.employmentDate ? "border-[#b41421]" : "border-slate-300"
              }`}
              placeholder="Employment Date"
              onFocus={(e) => {
                e.target.type = "date";
                // e.target.value = "2010-05-25";
              }}
              onChange={(e) =>
                setValue("employmentDate", e.target.value, {
                  shouldValidate: true,
                })
              }
            />
          </div>
        </div>
        <div>
          <label className="relative block">
            <input
              className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                errors.employerAddress ? "border-[#b41421]" : "border-slate-300"
              }`}
              placeholder="Employer's Address"
              type="text"
              {...register("employerAddress")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmploymentDetails;
