import CalendarIcon from "../CalendarIcon";

const BankAccountDetails = ({ register, errors, setValue }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl mt-10 mb-5">
        <h1>Bank Account Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900">
        <div className="pb-3">
          <label className="relative block">
            <input
              className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                errors.accountName && "border-[#b41421]"
              }`}
              placeholder="Account Name"
              type="text"
              {...register("accountName")}
            />
          </label>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.bankName && "border-[#b41421]"
                }`}
                placeholder="Bank Name"
                type="text"
                {...register("bankName")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.accountNumber && "border-[#b41421]"
                }`}
                placeholder="Account Number"
                type="text"
                {...register("accountNumber")}
              />
            </label>
          </div>

          <div className="relative block">
            <CalendarIcon />
            <input
              type="text"
              className={`placeholder:text-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ${
                errors.accountOpenDate && "border-[#b41421]"
              }`}
              placeholder="Account Opening Date"
              onFocus={(e) => {
                e.target.type = "date";
                // e.target.value = "2016-07-29";
              }}
              onChange={(e) =>
                setValue("accountOpenDate", e.target.value, {
                  shouldValidate: true,
                })
              }
            />
          </div>

          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.bvn && "border-[#b41421]"
                }`}
                placeholder="Bank Verification Number"
                type="text"
                {...register("bvn")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountDetails;
