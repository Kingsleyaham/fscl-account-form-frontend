import { FcPlus } from "react-icons/fc";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const SignatureMandate = ({
  register,
  fields,
  setValue,
  append,
  remove,
  errors,
}) => {
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Signatory Mandate</h1>
      </div>
      <div className="float-right">
        <FcPlus
          className="block text-3xl cursor-pointer mt-4"
          onClick={() => {
            append();
          }}
        />
      </div>
      <div className="bg-white p-5 pt-0 shadow-sm text-gray-900">
        {fields.map((field, index) => {
          return (
            <div className="border-b p-5 rounded-md" key={field.id}>
              <div className="flex items-center justify-between">
                <p className="font-bold text-slate-700">
                  Signatory {index + 1}
                </p>
                {index > 0 && (
                  <MdDeleteOutline
                    className="text-2xl text-[#b41421] cursor-pointer"
                    onClick={() => remove(index)}
                  />
                )}
              </div>
              <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.signatory?.[index]?.name &&
                        "placeholder:text-[#b41421]"
                      }`}
                      placeholder="Signatory Name"
                      type="text"
                      {...register(`signatory.${index}.name`)}
                    />
                  </label>
                </div>
                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.signatory?.[index]?.designation &&
                        "placeholder:text-[#b41421]"
                      }`}
                      placeholder="Designation"
                      type="text"
                      {...register(`signatory.${index}.designation`)}
                    />
                  </label>
                </div>
                <div>
                  <select
                    className={`border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                      errors?.signatory?.[index]?.class
                        ? "text-[#b41421]"
                        : "text-slate-800"
                    }`}
                    onChange={(e) =>
                      setValue(`signatory.${index}.class`, e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    defaultValue=""
                  >
                    <option disabled value="">
                      Signatory Class
                    </option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                  </select>
                </div>
                <div>
                  <div className=" pb-3">
                    <p className="text-sm font-bold text-slate-600">
                      Upload Signature <br />
                    </p>
                    <span className="text-xs text-[#b41421] font-medium">
                      {errors?.signatory?.[index]?.signature?.message}
                    </span>
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
                        {...register(`signatory.${index}.signature`)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignatureMandate;
