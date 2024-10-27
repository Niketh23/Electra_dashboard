const express = require("express");
const Users = require("./db");
const { createUserSchema } = require("./types");

const app = express();

app.use(express.json());

app.post("/addUsers", async (req, res) => {
  const userDetails = req.body;
  const ValidaUserDetails = createUserSchema.safeParse(userDetails);

  if (!ValidaUserDetails.success) {
    res.status(411).json({
      msg: "Invalid user details",
    });
  }

  await Users.create({
    ID: ValidaUserDetails.ID,
    Applicant_Name: ValidaUserDetails.Applicant_Name,
    Gender: ValidaUserDetails.Gender,
    District: ValidaUserDetails.District,
    State: ValidaUserDetails.State,
    Pincode: ValidaUserDetails.Pincode,
    Ownership: ValidaUserDetails.Ownership,
    GovtID_Type: ValidaUserDetails.GovtID_Type,
    ID_Number: ValidaUserDetails.ID_Number,
    Category: ValidaUserDetails.Category,
    Load_Applied: ValidaUserDetails.Load_Applied,
    Date_of_Application: ValidaUserDetails.Date_of_Application,
    Date_of_Approval: ValidaUserDetails.Date_of_Approval,
    Modified_Date: ValidaUserDetails.Modified_Date,
    Status: ValidaUserDetails.Status,
    Reviewer_ID: ValidaUserDetails.Reviewer_ID,
    Reviewer_Name: ValidaUserDetails.Reviewer_Name,
    Reviewer_Comments: ValidaUserDetails.Reviewer_Comments,
  });

  res.json({
    msg : "User Details added Successfully"
  })
});

app.get("/users", async (req, res) => {
  const users = await Users.find({});
  res.json({
    Users: users,
  });
});

app.listen(3000);
