const PdfTemplate = () => {
  return (
    <div className="w-[768px] mx-auto">
      <div className="bg-white text-gray-900">
        <div className="logo bg-[#ecebf3] flex items-center justify-between p-3">
          <img
            src="https://www.fcslng.com/wp-content/themes/fsclwordtheme/assets/images/fscllogo.png"
            alt="site logo"
            className="w-[20%]"
          />
          <h1 className="font-bold text-slate-900 text-xl uppercase">
            Individual Account Opening Form
          </h1>
        </div>

        <div className="p-5">
          {/* personal details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">PERSONAL DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="flex text-base py-1 justify-between  w-full">
                <div className="w-[75%]">
                  <div className="flex items-center text-base py-1">
                    <div className="flex">
                      <p className="font-semibold">Title:</p>
                      <p className="pl-3">Mr.</p>
                    </div>
                    <div className="flex pl-5">
                      <p className="font-semibold">First Name:</p>
                      <p className="pl-3">Michael</p>
                    </div>
                  </div>
                  <div className="flex item-center text-base py-1">
                    <div className="flex">
                      <p className="font-semibold">Other Name: </p>
                      <p className="pl-3">Nzubechukwu</p>
                    </div>
                    <div className="flex pl-5">
                      <p className="font-semibold">Surname </p>
                      <p className="pl-3">Okerekemmadu</p>
                    </div>
                  </div>
                  <div className="flex items-center text-base py-1">
                    <div className="flex">
                      <p className="font-semibold">Date of Birth:</p>
                      <p className="pl-3">12th October, 1998</p>
                    </div>
                    <div className="flex pl-5">
                      <p className="font-semibold">Marital Status:</p>
                      <p className="pl-3">Divorced</p>
                    </div>
                  </div>
                  <div className="flex items-center text-base py-1">
                    <div className="flex">
                      <p className="font-semibold">Mother's Maiden Name:</p>
                      <p className="pl-3">Okafor Chineye Nnamdi</p>
                    </div>
                    <div className="flex pl-5">
                      <p className="font-semibold">Gender:</p>
                      <p className="pl-3">Female</p>
                    </div>
                  </div>
                  <div className="flex items-center text-base py-1">
                    <div className="flex">
                      <p className="font-semibold">Profession:</p>
                      <p className="pl-3">Medical Practioner</p>
                    </div>
                    <div className="flex pl-5">
                      <p className="font-semibold">Country:</p>
                      <p className="pl-3">Nigeria</p>
                    </div>
                  </div>{" "}
                  <div className="flex items-center text-base py-1">
                    <div className="flex">
                      <p className="font-semibold">State of Origin:</p>
                      <p className="pl-3">Enugu</p>
                    </div>
                    <div className="flex pl-5">
                      <p className="font-semibold">Local Government Area:</p>
                      <p className="pl-3">Ezeagu</p>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] p-1 border">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wisegeek.com%2Fpassport-photo.jpg&f=1&nofb=1&ipt=a2d7440dc5a16756a97e505ba8b95fe0a2380f8284fcf228567e41b37ecf9b26&ipo=images"
                    alt="passport"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* corporate details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">CORPORATE DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Company Name:</p>
                    <p className="pl-3">9th Mile, Udi Enugu Nigeria</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">RC No:</p>
                    <p className="pl-3">113344</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Date of Inc: </p>
                    <p className="pl-3">+2349055664465</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">TIN: </p>
                    <p className="pl-3">kingsleyaham6@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  <p className="font-semibold">Account No: </p>
                  <p className="pl-3">kingsleyaham6@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* contact details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">CONTACT DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Contact Address:</p>
                    <p className="pl-3">9th Mile, Udi Enugu Nigeria</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Postal Address:</p>
                    <p className="pl-3">113344</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Mobile No: </p>
                    <p className="pl-3">+2349055664465</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Email Address: </p>
                    <p className="pl-3">kingsleyaham6@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Employment details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">EMPLOYMENT DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Employment Status:</p>
                    <p className="pl-3">Self-Employed</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Employer's Name:</p>
                    <p className="pl-3">Mr. Michael Ejeana</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Industry: </p>
                    <p className="pl-3">Mechanical Field</p>
                  </div>

                  <div className="flex pl-5">
                    <p className="font-semibold">Employment Date: </p>
                    <p className="pl-3">19th November, 1997</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Employer's Address: </p>
                    <p className="pl-3">No. 5 Ejenana Estate opp anambra enugu state</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Next of Kin details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">NEXT OF KIN DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Title:</p>
                    <p className="pl-3">Mr.</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Full Name:</p>
                    <p className="pl-3">Michael Okeke Ejeana</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Gender:</p>
                    <p className="pl-3">Female</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Relationship: </p>
                    <p className="pl-3">Uncle</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Mobile No: </p>
                    <p className="pl-3">+2347066554412</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Contact Address: </p>
                    <p className="pl-3">No. 54 opp close anambra enugu state</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pep Status */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">PEP STATUS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex">
                  <p className="font-semibold">Are you a Politically Exposed Person:</p>
                  <p className="pl-3">yes</p>
                </div>
                <div className="flex">
                  <p className="font-semibold">Details: </p>
                  <p className="pl-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti a itaque
                    dolorum. Ex assumenda perspiciatis asperiores amet animi in cupiditate harum
                    vero, quibusdam commodi! Perspiciatis veritatis, nulla nemo odit, dolores et
                    dolorum sit eius, sapiente ipsa iure recusandae repellat obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Authorized Persons */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">AUTHORIZED PERSONS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="border-b py-2">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Signatory Name:</p>
                    <p className="pl-3">Mr. James Okereke Onoh</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Mobile No:</p>
                    <p className="pl-3">+2349088778877</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Email Address: </p>
                    <p className="pl-3">jamesmichael@gmail.com</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Bank Verification No: </p>
                    <p className="pl-3">11221245655</p>
                  </div>
                </div>
                <div className="flex">
                  <p className="font-semibold">Contact Address: </p>
                  <p className="pl-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem
                  </p>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Means of Identification: </p>
                    <p className="pl-3">National Id</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Passport: </p>
                    <p className="pl-3">
                      <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                        link
                      </a>
                    </p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Signature: </p>
                    <p className="pl-3">
                      <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                        link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Investment Details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">INVESTMENT DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Contact Address:</p>
                    <p className="pl-3">9th Mile, Udi Enugu Nigeria</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Postal Address:</p>
                    <p className="pl-3">113344</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Mobile No: </p>
                    <p className="pl-3">+2349055664465</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Email Address: </p>
                    <p className="pl-3">kingsleyaham6@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bank Account Details */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">BANK ACCOUNT DETAILS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Account Name:</p>
                    <p className="pl-3">Kingsley Benjamin James</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Bank Name</p>
                    <p className="pl-3">Zenith Bank Plc</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Account No: </p>
                    <p className="pl-3">1212332255</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Account Openning Date: </p>
                    <p className="pl-3">12th November, 1995</p>
                  </div>
                </div>

                <div className="flex">
                  <p className="font-semibold">Bank Verification No: </p>
                  <p className="pl-3">11745899665</p>
                </div>
              </div>
            </div>
          </div>
          {/* Signatory Mandate */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">SIGNATORY MANDATE</h2>
            </div>
            <div className="px-3 py-2">
              <div className="border-b py-2">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Signatory Name:</p>
                    <p className="pl-3">Mr. James Okereke Onoh</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Designation:</p>
                    <p className="pl-3">Medical Doctor</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Signatory Class: </p>
                    <p className="pl-3">A</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Signature: </p>
                    <p className="pl-3">
                      <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                        link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b py-2">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Signatory Name:</p>
                    <p className="pl-3">Mr. James Okereke Onoh</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Designation:</p>
                    <p className="pl-3">Medical Doctor</p>
                  </div>
                </div>
                <div className="flex item-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Signatory Class: </p>
                    <p className="pl-3">A</p>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Signature: </p>
                    <p className="pl-3">
                      <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                        link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Kyc Documents */}
          <div className="py-2">
            <div className="header bg-[#c7d6d5] px-2 py-1">
              <h2 className="font-bold">KYC DOCUMENTS</h2>
            </div>
            <div className="px-3 py-2">
              <div className="">
                <div className="flex items-center text-base py-1">
                  <div className="flex">
                    <p className="font-semibold">Utility Bill:</p>
                    <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                      link
                    </a>
                  </div>
                  <div className="flex pl-5">
                    <p className="font-semibold">Form of Identification:</p>
                    <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                      link
                    </a>
                  </div>
                  <div className="flex">
                    <p className="font-semibold  pl-5">Signature: </p>
                    <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                      link
                    </a>
                  </div>
                  <div className="flex">
                    <p className="font-semibold pl-5">Passport Photograph: </p>
                    <a className="pl-2 underline text-blue-600 font-medium" href="https://">
                      link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfTemplate;
