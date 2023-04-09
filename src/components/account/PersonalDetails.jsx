import React, { useState } from "react";
import countries from "../../data/countries.json";
import lga from "../../data/lga.json";
import CalendarIcon from "../CalendarIcon";

const PersonalDetails = ({ register, setValue, errors }) => {
  const [states, setStates] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");
  const [lgas, setLgas] = useState([]);

  const updateState = (selectedCountry) => {
    const newStates = countries.filter(
      (country) => country.country === selectedCountry
    );
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
      <div className="bg-white p-5 shadow-sm text-gray-900">
        {/* Personal Details */}
        <div>
          <div className="pb-5">
            <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
              <div>
                <select
                  className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors.title ? "border-[#b41421]" : ""
                  }`}
                  onChange={(e) =>
                    setValue("title", e.target.value, { shouldValidate: true })
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
                    className={`placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                      errors.firstName && "border-[#b41421]"
                    }`}
                    placeholder="Firstname"
                    type="text"
                    {...register("firstName")}
                  />
                </label>
              </div>
              <div>
                <label className="relative block">
                  <input
                    className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                      errors.middleName && "border-[#b41421]"
                    }`}
                    placeholder="Middlename"
                    {...register("middleName")}
                    type="text"
                  />
                </label>
              </div>
              <div>
                <label className="relative block">
                  <input
                    className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                      errors.surname && "border-[#b41421]"
                    }`}
                    placeholder="Surname"
                    type="text"
                    {...register("surname")}
                  />
                </label>
              </div>

              <div className="relative block">
                <select
                  className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors.gender && "border-[#b41421]"
                  }`}
                  onChange={(e) =>
                    setValue("gender", e.target.value, { shouldValidate: true })
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
                  className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors.maritalStatus && "border-[#b41421]"
                  }`}
                  onChange={(e) =>
                    setValue("maritalStatus", e.target.value, {
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
                    className={`placeholder:text-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ${
                      errors.dateOfBirth && "border-[#b41421]"
                    }`}
                    placeholder="Date of Birth"
                    onFocus={(e) => {
                      e.target.type = "date";
                      // e.target.value = "1995-05-29";
                    }}
                    onChange={(e) =>
                      setValue("dateOfBirth", e.target.value, {
                        shouldValidate: true,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="relative block">
                  <input
                    className={`placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                      errors.motherMaidenName && "border-[#b41421]"
                    }`}
                    placeholder="Mother's Maiden Name"
                    type="text"
                    {...register("motherMaidenName")}
                  />
                </label>
              </div>
              <div>
                <label className="relative block">
                  <input
                    className={`placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                      errors.profession && "border-[#b41421]"
                    }`}
                    placeholder="Profession"
                    type="text"
                    {...register("profession")}
                  />
                </label>
              </div>

              <div>
                <select
                  className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:text-gray-500 ${
                    errors.country && "border-[#b41421]"
                  }`}
                  onChange={(e) => {
                    setValue("country", e.target.value, {
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
                  className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:text-gray-500 ${
                    errors.stateOfOrigin && "border-[#b41421]"
                  }`}
                  onChange={(e) => {
                    setValue("stateOfOrigin", e.target.value, {
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
                    className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:text-gray-500 ${
                      errors.lga && "border-[#b41421]"
                    }`}
                    onChange={(e) => {
                      setValue("lga", e.target.value, {
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
                      className={`placeholder: placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:border-[#c7d6d5] focus:ring-[#c7d6d5] focus:ring-1 sm:text-sm ${
                        errors.lga && "border-[#b41421]"
                      }`}
                      placeholder="Local Government Area"
                      type="text"
                      {...register("lga")}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
