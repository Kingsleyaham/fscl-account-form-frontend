import { date, object, string, setLocale, mixed } from "yup";
import { parse, isDate, differenceInYears } from "date-fns";

// const message = "field is required";
const supportedFormat = ["image/jpeg", "image/jpg", "image/png"];

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const individualAccountSchema = object({
  photo: mixed()
    .nullable()
    .required()
    .test("file size", "File size too large", (value) => {
      // value && value[0].size <= 1048576;
      console.log(value);
    })
    .test(
      "file format",
      "Invalid file format",
      (value) => value && supportedFormat.includes(value[0].type)
    )
    .label("Photo"),
  title: string().required(),
  firstName: string().required().trim().label("First Name"),
  middleName: string().nullable().trim().label("Middle Name"),
  surname: string().required().trim(),
  gender: string().required(),
  maritalStatus: string().required().label("Marital Status"),
  dateOfBirth: date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

      return parsedDate;
    })
    .test(
      "dateOfBirth",
      "dob should be greater than 18years",
      function (value) {
        return differenceInYears(new Date(), new Date(value)) >= 18;
      }
    )
    .required()
    .label("Dob"),
  motherMaidenName: string().required().label("Mother Maiden Name"),
  profession: string().required(),
  country: string().required(),
  stateOfOrigin: string().required().label("State of Origin"),
  lga: string().required().label("Local Government Area"),

  //   contact address
  contactAddress: string().required().label("Contact Address"),
  postalAddress: string().required().label("Postal Address"),
  mobileNumber: string().required().label("Mobile Number"),
  email: string().required(),

  //   employment details
  employmentStatus: string().required().label("Employment Status"),
  employerName: string()
    .required()
    .when("employmentStatus", {
      is: "employed",
      otherwise: (val) => val.nullable().notRequired(),
    })
    .label("Employer Name"),
  industry: string()
    .required()
    .when("employmentStatus", {
      is: "employed",
      otherwise: (val) => val.nullable().notRequired(),
    }),

  employerAddress: string()
    .required()
    .when("employmentStatus", {
      is: "employed",
      otherwise: (val) => val.nullable().notRequired(),
    })
    .label("Employer Address"),

  employmentDate: date()
    .required()
    .when("employmentStatus", {
      is: "employed",
      otherwise: (val) => val.nullable().notRequired(),
      then: (val) =>
        val
          .transform((value, originalValue) => {
            const parsedDate = isDate(originalValue)
              ? originalValue
              : parse(originalValue, "yyyy-MM-dd", new Date());

            return parsedDate;
          })
          .test("employmentDate", "invalid employment date", function (value) {
            return differenceInYears(new Date(), new Date(value)) <= 100;
          })
          .max(new Date()),
    })
    .label("Employment Date"),

  // Next of Kin
  nokFullname: string()
    .required()
    .label("Next of Kin Fullname")
    .trim()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain Latin letters."
    )
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name."),

  nokTitle: string().required().trim().label("Next of Kin Title"),
  nokGender: string().required().trim().label("Next of Kin Gender"),
  nokRelationship: string().required().trim().label("Next of Kin Relationship"),
  nokMobileNumber: string().required().trim().label("Next of Kin Mobile No"),
  nokAddress: string().required().trim().label("Next of Kin Mobile No"),

  //   PEP Status
  pepStatus: string().required().label("Pep Status"),
  pepDetails: string()
    .required()
    .when("pepStatus", {
      is: "yes",
      otherwise: (details) => details.nullable().notRequired(),
    }),

  // Investment Details
  investContactAddress: string()
    .required()
    .trim()
    .label("Investment Contact Address"),

  investPostalAddress: string()
    .required()
    .trim()
    .label("Investment Postal Address"),

  investMobileNumber: string()
    .required()
    .trim()
    .label("Investment Mobile Number"),

  investEmail: string().required().trim().label("Investment Email Address"),

  // Bank Account Details
  accountName: string().required().trim().label("Account Name"),
  bankName: string().required().trim().label("Bank Name"),
  accountNumber: string().required().trim().label("Account Number"),
  accountOpenDate: date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

      return parsedDate;
    })
    .test("accountOpenDate", "Invalid Account Opening Date", function (value) {
      return differenceInYears(new Date(), new Date(value)) <= 100;
    })
    .max(new Date())
    .required()
    .label("Account Open Date"),
  bvn: string().required().trim().label("Bvn"),

  // Kyc documents
  utilityBill: mixed()
    .nullable()
    .required()
    .test(
      "file size",
      "File size too large",
      (value) => value && value[0].size <= 1048576
    )
    .test(
      "file format",
      "Invalid file format",
      (value) => value && supportedFormat.includes(value[0].type)
    )
    .label("Utility Bill"),

  identityUpload: mixed()
    .nullable()
    .required()
    .test(
      "file size",
      "File size too large",
      (value) => value && value[0].size <= 1048576
    )
    .test(
      "file format",
      "Invalid file format",
      (value) => value && supportedFormat.includes(value[0].type)
    )
    .label("Means of Idenfication"),

  signatureUpload: mixed()
    .nullable()
    .required()
    .test(
      "file size",
      "File size too large",
      (value) => value && value[0].size <= 1048576
    )
    .test(
      "file format",
      "Invalid file format",
      (value) => value && supportedFormat.includes(value[0].type)
    )
    .label("Signature"),
});
