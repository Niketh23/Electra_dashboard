const zod = require('zod');

// need to create a validation

const createUserSchema = zod.object({
  ID: zod.string(),
  Applicant_Name: zod.string(),
  Gender: zod.string(),
  District: zod.string(),
  State: zod.string(),
  Pincode: zod.string(), // Change to String to allow for leading zeros
  Ownership: zod.string(),
  GovtID_Type: zod.string(),
  ID_Number: zod.string(), // Change to String for flexibility
  Category: zod.string(),
  Load_Applied: { type: Number},
  Date_of_Application: zod.string()
  .regex(/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Invalid date format. Expected format: DD/MM/YY",
  }),
  Date_of_Approval: zod.string()
  .regex(/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Invalid date format. Expected format: DD/MM/YY",
  }).or(z.null()),
  Modified_Date: zod.string()
  .regex(/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Invalid date format. Expected format: DD/MM/YY",
  }),
  Status: zod.string(),
  Reviewer_ID: { type: Number},
  Reviewer_Name: zod.string(),
  Reviewer_Comments: zod.string(),
})


module.exports = ({
  createUserSchema
})

