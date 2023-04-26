import React, { useState } from "react";
import countries from "../../data/countries.json";
import lga from "../../data/lga.json";
import CalendarIcon from "../CalendarIcon";
import { FcPlus } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";

const JointPersonalDetails = ({ errors, setValue, register, fields, append, remove }) => {
  const [states, setStates] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");
  const [lgas, setLgas] = useState([]);

  const updateState = (selectedCountry) => {
    const newStates = countries.filter((country) => country.country === selectedCountry);
    setStates([...newStates[0].states]);

    if (selectedCountry.toLowerCase() === "nigeria") {
      setCurrentCountry("nigeria");
    } else {
      setCurrentCountry("");
    }
  };

  const updateLGA = (state) => {
    if (currentCountry === "nigeria") {
      const newLga = lga.filter((elem) => elem.state === state);

      setLgas([...newLga[0].lga]);
    }
  };
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Personal Details</h1>
      </div>

      <div className="float-right">
        <FcPlus
          className="block text-3xl cursor-pointer mt-4"
          onClick={() => {
            append();
          }}
        />
      </div>

      <div className="bg-white p-5 shadow-sm text-gray-900">
        {/* Personal Details */}
        <div>
          {fields.map((field, index) => (
            <div className="p-5 border-b rounded-md" key={field.id}>
              <div className="flex items-center justify-between">
                <p className="font-bold text-slate-700">Person {index + 1}</p>
                {index > 0 && (
                  <MdDeleteOutline
                    className="text-2xl text-[#b41421] cursor-pointer"
                    onClick={() => remove(index)}
                  />
                )}
              </div>
              <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
                <div>
                  <select
                    className={`border  text-sm text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                      errors?.personalDetails?.[index]?.title
                        ? "border-[#b41421]"
                        : "border-gray-300"
                    }`}
                    onChange={(e) =>
                      setValue(`personalDetails.${index}.title`, e.target.value, {
                        shouldValidate: true,
                      })
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
                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.personalDetails?.[index]?.firstName
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      placeholder="Firstname"
                      type="text"
                      {...register(`personalDetails.${index}.firstName`)}
                    />
                  </label>
                </div>
                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.personalDetails?.[index]?.middleName
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      placeholder="Middlename"
                      {...register(`personalDetails.${index}.middleName`)}
                      type="text"
                    />
                  </label>
                </div>
                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder: placeholder:text-slate-600 block bg-white w-full border  rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.personalDetails?.[index]?.surname
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      placeholder="Surname"
                      type="text"
                      {...register(`personalDetails.${index}.surname`)}
                    />
                  </label>
                </div>

                <div className="relative block">
                  <select
                    className={`border  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                      errors?.personalDetails?.[index]?.gender
                        ? "border-[#b41421]"
                        : "border-slate-300"
                    }`}
                    onChange={(e) =>
                      setValue(`personalDetails.${index}.gender`, e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    defaultValue=""
                  >
                    <option disabled value="">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="relative block">
                  <select
                    className={`border  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                      errors?.personalDetails?.[index]?.maritalStatus
                        ? "border-[#b41421]"
                        : "border-slate-300"
                    }`}
                    onChange={(e) =>
                      setValue(`personalDetails.${index}.maritalStatus`, e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    defaultValue=""
                  >
                    <option disabled value="">
                      Marital Status
                    </option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                <div>
                  <div className="relative">
                    <CalendarIcon />
                    <input
                      type="text"
                      className={`placeholder:text-slate-600 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ${
                        errors?.personalDetails?.[index]?.dateOfBirth
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      placeholder="Date of Birth"
                      onFocus={(e) => {
                        e.target.type = "date";
                      }}
                      onChange={(e) =>
                        setValue(`personalDetails.${index}.dateOfBirth`, e.target.value, {
                          shouldValidate: true,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.personalDetails?.[index]?.motherMaidenName
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      placeholder="Mother's Maiden Name"
                      type="text"
                      {...register(`personalDetails.${index}.motherMaidenName`)}
                    />
                  </label>
                </div>
                <div>
                  <label className="relative block">
                    <input
                      className={`placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors?.personalDetails?.[index]?.profession
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      placeholder="Profession"
                      type="text"
                      {...register(`personalDetails.${index}.profession`)}
                    />
                  </label>
                </div>

                <div>
                  <select
                    className={`border  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:text-gray-500 ${
                      errors?.personalDetails?.[index]?.country
                        ? "border-[#b41421]"
                        : "border-slate-300"
                    }`}
                    onChange={(e) => {
                      setValue(`personalDetails.${index}.country`, e.target.value, {
                        shouldValidate: true,
                      });
                      updateState(e.target.value);
                    }}
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select Country
                    </option>
                    {countries.map((country, index) => (
                      <React.Fragment key={index}>
                        <option value={country.country}>{country.country}</option>
                      </React.Fragment>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    className={`border  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:text-gray-500 ${
                      errors?.personalDetails?.[index]?.stateOfOrigin
                        ? "border-[#b41421]"
                        : "border-slate-300"
                    }`}
                    onChange={(e) => {
                      setValue(`personalDetails.${index}.stateOfOrigin`, e.target.value, {
                        shouldValidate: true,
                      });
                      updateLGA(e.target.value);
                    }}
                    defaultValue=""
                  >
                    <option disabled value="">
                      State of Origin
                    </option>
                    {states.map((state, index) => (
                      <React.Fragment key={index}>
                        <option value={state}>{state}</option>
                      </React.Fragment>
                    ))}
                  </select>
                </div>

                {currentCountry === "nigeria" ? (
                  <div>
                    <select
                      className={`border  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:text-gray-500 ${
                        errors?.personalDetails?.[index]?.lga
                          ? "border-[#b41421]"
                          : "border-slate-300"
                      }`}
                      onChange={(e) => {
                        setValue(`personalDetails.${index}.lga`, e.target.value, {
                          shouldValidate: true,
                        });
                      }}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Local Government Area
                      </option>
                      {lgas.map((lga, index) => (
                        <React.Fragment key={index}>
                          <option value={lga}>{lga}</option>
                        </React.Fragment>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="relative block">
                      <input
                        className={`placeholder: placeholder:text-slate-600 block bg-white w-full border rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                          errors?.personalDetails?.[index]?.lga
                            ? "border-[#b41421]"
                            : "border-slate-300"
                        }`}
                        placeholder="Local Government Area"
                        type="text"
                        {...register(`personalDetails.${index}.lga`)}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JointPersonalDetails;
