const InvestmentDetails = ({ register, errors }) => {
  return (
    <div className="mt-8">
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Investment Details </h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900">
        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-4">
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.investAddress
                    ? "border-[#b41421]"
                    : " border-slate-300"
                }`}
                placeholder="Contact Address"
                type="text"
                {...register("investAddress")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.investPostalAddress
                    ? "border-[#b41421]"
                    : " border-slate-300"
                }`}
                placeholder="Postal Address"
                type="text"
                {...register("investPostalAddress")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.investMobileNum
                    ? "border-[#b41421]"
                    : " border-slate-300"
                }`}
                placeholder="Mobile No"
                type="text"
                {...register("investMobileNum")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.investEmail ? "border-[#b41421]" : " border-slate-300"
                }`}
                placeholder="Email Address"
                type="text"
                {...register("investEmail")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
