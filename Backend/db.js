const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB with error handling
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// admin schema  

const AdminSchema = new mongoose.Schema({
  Reviewer_ID : String,
  Reviewer_Name : String
});

const userSchema = new mongoose.Schema({
  ID: { type: Number },
  Applicant_Name: { type: String },
  Gender: { type: String },
  District: { type: String },
  State: { type: String },
  Pincode: { type: String }, // Change to String to allow for leading zeros
  Ownership: { type: String },
  GovtID_Type: { type: String },
  ID_Number: { type: String }, // Change to String for flexibility
  Category: { type: String },
  Load_Applied: { type: Number },
  Date_of_Application: { type: String },
  Date_of_Approval: { type: String },
  Modified_Date: { type: String },
  Status: { type: String },
  Reviewer_ID: { type: Number },
  Reviewer_Name: { type: String },
  Reviewer_Comments: { type: String },
});

const Admin = mongoose.model('staff',AdminSchema);
const Users = mongoose.model("Users", userSchema);

module.exports = {
  Users,
  Admin
}
