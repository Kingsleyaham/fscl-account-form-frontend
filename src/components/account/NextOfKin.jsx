const NextOfKin = ({ register, errors, setValue }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Next of Kin Details</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-900 pb-16">
        <div>
          <label className="relative block">
            <input
              className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                errors.nokFullname ? "border-[#b41421]" : "border-slate-300"
              }`}
              placeholder="Full Name"
              type="text"
              {...register("nokFullname")}
            />
          </label>
        </div>
        <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
          <div>
            <select
              className={`border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                errors.nokTitle ? "border-[#b41421]" : "border-slate-300"
              }`}
              onChange={(e) =>
                setValue("nokTitle", e.target.value, { shouldValidate: true })
              }
              defaultValue=""
            >
              <option disabled value="">
                Select Title
              </option>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
              <option value="miss">Miss.</option>
              <option value="dr">Dr.</option>
              <option value="prof">Prof.</option>
            </select>
          </div>

          <div className="relative block">
            <select
              className={`border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                errors.nokGender ? "border-[#b41421]" : "border-slate-300"
              }`}
              onChange={(e) =>
                setValue("nokGender", e.target.value, { shouldValidate: true })
              }
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="relative block">
              <input
                className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.nokRelationship
                    ? "border-[#b41421]"
                    : "border-slate-300"
                }`}
                placeholder="Relationship"
                type="text"
                name="nokRelationship"
                {...register("nokRelationship")}
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <input
                className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                  errors.nokMobileNumber
                    ? "border-[#b41421]"
                    : "border-slate-300"
                }`}
                placeholder="Mobile No"
                type="text"
                name="nokMobileNumber"
                {...register("nokMobileNumber")}
              />
            </label>
          </div>
        </div>
        <div>
          <label className="relative block">
            <input
              className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                errors.nokAddress ? "border-[#b41421]" : "border-slate-300"
              }`}
              placeholder="Contact Address"
              type="text"
              {...register("nokAddress")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NextOfKin;
