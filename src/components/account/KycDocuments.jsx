import { IoCloseCircle } from "react-icons/io5";

const KycDocuments = ({ register, errors, setValue }) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl mt-10 mb-5">
        <div className="flex items-center justify-between">
          <h1>KYC Documents</h1>
          <p className="italic lowercase text-[#ecebf3] text-sm">
            KINDLY UPLOAD IMAGES (.Jpeg, .JPG, .PNG)
          </p>
        </div>
      </div>
      <div className="bg-white px-5 py-3 shadow-sm text-gray-900">
        <div>
          <div className="mb-6 grid gap-6 md:grid-cols-2 mt-2">
            <div>
              <div className=" pb-3">
                <p className="text-sm font-bold text-slate-600">
                  Upload a recent utility bill <br />
                </p>
                {errors.utilityBill && (
                  <span className="text-xs text-[#b41421] font-medium">
                    {errors.utilityBill.message}
                  </span>
                )}
              </div>

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
                    {...register("utilityBill")}
                  />
                </label>
                <IoCloseCircle className="text-[#b41421] text-xl shadow-lg shadow-[#d5c7d6] rounded-full cursor-pointer hidden" />
              </div>

              <div className="my-4 hidden">
                <img src="" alt="" className="w-full h-48" />
              </div>
            </div>
            <div>
              <div className=" pb-3">
                <p className="text-sm font-bold text-slate-600">
                  Upload a form of identification <br />
                </p>
                {errors.identityUpload && (
                  <span className="text-xs text-[#b41421] font-medium">
                    {errors.identityUpload.message}
                  </span>
                )}
              </div>

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
                    {...register("identityUpload")}
                  />
                </label>
                <IoCloseCircle className="text-[#b41421] text-xl shadow-lg shadow-[#d5c7d6] rounded-full cursor-pointer hidden" />
              </div>
            </div>
            <div>
              <div className=" pb-3">
                <p className="text-sm font-bold text-slate-600">
                  Upload Signature <br />
                </p>
                {errors.signatureUpload && (
                  <span className="text-xs text-[#b41421] font-medium">
                    {errors.signatureUpload.message}
                  </span>
                )}
              </div>

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
                    {...register("signatureUpload")}
                  />
                </label>
                <IoCloseCircle className="text-[#b41421] text-xl shadow-lg shadow-[#d5c7d6] rounded-full cursor-pointer hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycDocuments;
