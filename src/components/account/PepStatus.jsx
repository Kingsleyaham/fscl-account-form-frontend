const PepStatus = ({ register, errors }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Pep Status</h1>
      </div>
      <div className="bg-white p-5 shadow-sm text-gray-800 pb-8">
        <div className="flex items-center py-3">
          <p className="px-3">Are you a Politically Exposed Person?</p>
          <div>
            <input
              id="pepStatusYes"
              type="radio"
              value="yes"
              {...register("pepStatus")}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="pepStatusYes" className="ml-2 text-gray-800">
              Yes
            </label>
          </div>
          <div className="px-3">
            <input
              id="pepStatusNo"
              {...register("pepStatus")}
              type="radio"
              value="no"
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="pepStatusNo" className="ml-2 text-gray-800">
              No
            </label>
          </div>
        </div>

        <div className="pb-3 pt-4">
          <div className="min-w-fit">
            <p className="px-3 pb-5">If Yes, Please give details</p>
          </div>

          <div className="w-full">
            <label>
              <textarea
                {...register("pepDetails")}
                rows="3"
                className={`resize-y w-full rounded-lg ${
                  errors.pepDetails && "border-[#b41421]"
                }`}
                placeholder="Details here..."
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PepStatus;
