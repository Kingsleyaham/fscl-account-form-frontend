import { date, object, string, setLocale, mixed, array, bool } from "yup";
import { parse, isDate, differenceInYears } from "date-fns";

// const message = "field is required";
const supportedFormat = ["image/jpeg", "image/jpg", "image/png"];

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const corporateAccountSchema = object({
  // Corporate Details
  companyName: string().required().label("Company Name"),
  rcNum: string().required().label("RC No"),
  dateOfInc: date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

      return parsedDate;
    })
    .test("dateOfInc", "Invalid Date of Inc", function (value) {
      return differenceInYears(new Date(), new Date(value)) <= 100;
    })
    .max(new Date())
    .required()
    .label("Date of Inc."),
  tin: string().required().label("TIN"),
  corpAccountNumber: string().required().length(10).label("Corporate Account No"),

  //   contact address
  contactAddress: string().required().label("Contact Address"),
  postalAddress: string().required().label("Postal Address"),
  mobileNumber: string().required().label("Mobile Number"),
  email: string().required().email("Invalid Email address").trim(),

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
    .label("Account Open Date"),
  bvn: string().required().trim().label("Bvn").length(11, "Invalid Bank Verification No"),

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

  // Terms and Condition Validation
  termsAndCondition: bool().oneOf([true], "Please Accept our Terms and Condition"),
});
