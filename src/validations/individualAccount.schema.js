import { date, object, string, setLocale, mixed, array } from "yup";
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
  title: string().required(),
  firstName: string().required().trim().label("firstname"),
  middleName: string().nullable().trim().label("middlename"),
  surname: string().required().trim(),
  gender: string().required(),
  maritalStatus: string().required().label("marital status"),
  dateOfBirth: date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

      return parsedDate;
    })
    .test("dateOfBirth", "dob should be greater than 18years", function (value) {
      return differenceInYears(new Date(), new Date(value)) >= 18;
    })
    .required()
    .typeError("dob must be of type date")
    .label("Dob"),

  motherMaidenName: string().required().label("Mother Maiden Name"),
  profession: string().required(),
  country: string().required(),
  stateOfOrigin: string().required().label("State of Origin"),
  lga: string().required().label("Local Government Area"),

  //   contact details
  contactAddress: string().required().label("Contact Address"),
  postalAddress: string().required().label("Postal Address"),
  mobileNumber: string().required().label("Mobile Number"),
  email: string().required().email("Invalid Email address").trim(),

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
          .max(new Date())
          .typeError("Employment Date must be of type date"),
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
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter nok full name."),

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
  investAddress: string().required().trim().label("Investment Contact Address"),

  investPostalAddress: string().required().trim().label("Investment Postal Address"),

  investMobileNumber: string().required().trim().label("Investment Mobile Number"),

  investEmail: string()
    .required()
    .trim()
    .email("Invalid Investment Email address")
    .label("Investment Email Address"),

  // Bank Account Details
  accountName: string().required().trim().label("Account Name"),
  bankName: string().required().trim().label("Bank Name"),
  accountNumber: string().required().trim().length(10).label("Account Number"),
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
    .typeError("Account open date must be of type date")
    .label("Account Open Date"),
  bvn: string().required().trim().label("Bvn").length(11, "Invalid Bank Verification No"),

  // Authorized Persons
  authorizedPerson: array().of(
    object().shape({
      name: string().required().trim().min(3, "signatory name too short"),
      address: string().required().trim(),
      mobileNum: string().required().trim(),
      email: string().email("Invalid Email address").required().trim(),
      bvn: string().required().length(11, "Invalid Bank Verification No"),
      identification: string().required().trim(),
      passport: mixed()
        .test("required", "Passport Photo is required", (value) => value.length > 0)
        .test(
          "file format",
          "Invalid file format",
          (value) => value.length && supportedFormat.includes(value[0].type)
        )
        .test(
          "file size",
          "File size too large",
          (value) => value.length && value[0].size <= 1048576
        ),
      signature: mixed()
        .test("required", "Signature is required", (value) => value.length > 0)
        .test(
          "file format",
          "Invalid file format",
          (value) => value.length && supportedFormat.includes(value[0].type)
        )
        .test(
          "file size",
          "File size too large",
          (value) => value.length && value[0].size <= 1048576
        ),
    })
  ),

  // Signatory Mandate
  signatory: array().of(
    object().shape({
      name: string().required().trim().min(3, "signatory name too short"),
      designation: string().required().trim(),
      class: string().required().trim(),
      signature: mixed()
        .test("required", "Signature is required", (value) => value.length > 0)
        .test(
          "file format",
          "Invalid file format",
          (value) => value.length && supportedFormat.includes(value[0].type)
        )
        .test(
          "file size",
          "File size too large",
          (value) => value.length && value[0].size <= 1048576
        ),
    })
  ),

  // Kyc documents
  utilityBill: mixed()
    .test("required", "Utility Bill is required", (value) => value.length > 0)
    .test(
      "file format",
      "Invalid file format",
      (value) => value.length && supportedFormat.includes(value[0].type)
    )
    .test("file size", "File size too large", (value) => value.length && value[0].size <= 1048576),

  identityUpload: mixed()
    .test("required", "Identification document is required", (value) => value.length > 0)
    .test(
      "file format",
      "Invalid file format",
      (value) => value.length && supportedFormat.includes(value[0].type)
    )
    .test("file size", "File size too large", (value) => value.length && value[0].size <= 1048576),

  signatureUpload: mixed()
    .test("required", "Signature is required", (value) => value.length > 0)
    .test(
      "file format",
      "Invalid file format",
      (value) => value.length && supportedFormat.includes(value[0].type)
    )
    .test("file size", "File size too large", (value) => value.length && value[0].size <= 1048576),

  passportPhoto: mixed()
    .test("required", "Passport Photo is required", (value) => value.length > 0)
    .test(
      "file format",
      "Invalid file format",
      (value) => value.length && supportedFormat.includes(value[0].type)
    )
    .test("file size", "File size too large", (value) => value.length && value[0].size <= 1048576),
});
