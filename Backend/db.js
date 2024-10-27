const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB with error handling
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB successfully.");
}).catch((err) => {
  console.error("MongoDB connection error:", err.message);
});

const userSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Applicant_Name: { type: String, required: true },
  Gender: { type: String, required: true },
  District: { type: String, required: true },
  State: { type: String, required: true },
  Pincode: { type: String, required: true }, // Change to String to allow for leading zeros
  Ownership: { type: String, required: true },
  GovtID_Type: { type: String, required: true },
  ID_Number: { type: String, required: true }, // Change to String for flexibility
  Category: { type: String, required: true },
  Load_Applied: { type: Number, required: true },
  Date_of_Application: { type: Date, required: true },
  Date_of_Approval: { type: Date },
  Modified_Date: { type: Date },
  Status: { type: String, required: true },
  Reviewer_ID: { type: Number },
  Reviewer_Name: { type: String },
  Reviewer_Comments: { type: String },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
