const express = require("express");
const {Users} = require("./db");
const cors = require('cors');
const { createUserSchema} = require("./types");
const adminMiddleware = require("./middlewares/Admin");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/addUsers", adminMiddleware, async (req, res) => {
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
    msg: "User Details added Successfully",
  });
});

app.get("/users", async (req, res) => {
  const users = await Users.find({});
  res.json({
    Users: users,
  });
});

app.put("/UpdateUsers", adminMiddleware, async (req, res) => {
  const UpdatedUser = req.body;
  const ValidUpdatedUser = createUserSchema.safeParse(UpdatedUser);

  if (!ValidUpdatedUser.success) {
    res.status(411).json({
      msg: "Invalid User updates",
    });
  }

  await Users.updateOne(
    {
      _id: req.body.id,
    },
    {
      $set: {
        ID: ValidUpdatedUser.ID,
        Applicant_Name: ValidUpdatedUser.Applicant_Name,
        Gender: ValidUpdatedUser.Gender,
        District: ValidUpdatedUser.District,
        State: ValidUpdatedUser.State,
        Pincode: ValidUpdatedUser.Pincode,
        Ownership: ValidUpdatedUser.Ownership,
        GovtID_Type: ValidUpdatedUser.GovtID_Type,
        ID_Number: ValidUpdatedUser.ID_Number,
        Category: ValidUpdatedUser.Category,
        Load_Applied: ValidUpdatedUser.Load_Applied,
        Date_of_Application: ValidUpdatedUser.Date_of_Application,
        Date_of_Approval: ValidUpdatedUser.Date_of_Approval,
        Modified_Date: ValidUpdatedUser.Modified_Date,
        Status: ValidUpdatedUser.Status,
        Reviewer_ID: ValidUpdatedUser.Reviewer_ID,
        Reviewer_Name: ValidUpdatedUser.Reviewer_Name,
        Reviewer_Comments: ValidUpdatedUser.Reviewer_Comments,
      },
    }
  );
});

app.post("/delete", adminMiddleware, async(req,res)=>{
  const userId = req.body;
  awaitUsers.deleteOne({
    _id : userId
  })
  
  res.json({
    msg : "User deleted successfully"
  })
})

app.listen(3000,()=>{
  console.log("running on port 3000");
});
