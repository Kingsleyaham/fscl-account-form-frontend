import React, { useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import countries from "../../data/countries.json";
import lga from "../../data/lga.json";
import CalendarIcon from "../CalendarIcon";

const PersonalDetails = ({ register, setValue, errors }) => {
  const [states, setStates] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");
  const [lgas, setLgas] = useState([]);
  const image = useRef(null);
  const imageInput = useRef(null);

  const previewImage = (e) => {
    let file = imageInput.current.files[0];
    let reader = new FileReader();
    reader.onload = (e) => (image.current.src = e.target.result);
    reader.readAsDataURL(file);
  };

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
          <div className="py-5">
            {/* user profile image */}
            <div className="mb-5 text-center pb-5">
              <div className="mx-auto w-32 h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                <img
                  ref={image}
                  className="object-cover w-full h-32 rounded-full"
                  alt="placeholder icon"
                  src={avatar}
                />
                {errors.photo && (
                  <p className="text-xs text-[#b41421] font-medium">
                    {errors.photo.message}
                  </p>
                )}
              </div>

              <label
                htmlFor="photo"
                type="button"
                className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="rouund"
                >
                  <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                Browse Photo
              </label>

              <input
                name="photo"
                id="photo"
                ref={imageInput}
                accept="image/*"
                className="hidden"
                type="file"
                onChange={(e) => {
                  previewImage(e);
                  setValue({
                    target: { value: e.target.files[0], name: e.target.name },
                  });
                }}
                // {...register("photo")}
              />
            </div>

            <div className="mb-6 grid gap-6 md:grid-cols-2 mt-5">
              <div>
                <select
                  className={`border border-gray-300  text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                    errors.title ? "border-[#b41421]" : ""
                  }`}
                  onChange={(e) =>
                    setValue("title", e.target.value, { shouldValidate: true })
                  }
                >
                  <option disabled selected>
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
                >
                  <option selected disabled>
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
                >
                  <option selected disabled>
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
                >
                  <option selected disabled>
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
                >
                  <option selected disabled>
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
                  >
                    <option selected disabled>
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
