const ContactAddress = ({ errors, register }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Contact Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900">
        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.contactAddress ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Contact Address"
                type="text"
                {...register("contactAddress")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.postalAddress ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Postal Address"
                type="text"
                {...register("postalAddress")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.mobileNumber ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Mobile No"
                type="text"
                {...register("mobileNumber")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.email ? "border-[#b41421]" : "border-slate-300"
                }`}
                placeholder="Email Address"
                type="text"
                {...register("email")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
