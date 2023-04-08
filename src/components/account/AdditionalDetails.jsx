const AdditionalDetails = () => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Additional Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900 pb-8">
        <div>
          <label className="relative block">
            <input
              className="placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm"
              placeholder="Name of Beneficial Owner(s) if any"
              type="text"
              name="beneficiary"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
