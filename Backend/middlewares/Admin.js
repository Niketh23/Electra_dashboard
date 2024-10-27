const { Admin } = require("../db");

const adminMiddleware = async(req,res,next)=>{
  const adminDetails = req.body;
  const Reviewer_ID = adminDetails.Reviewer_ID;
  const Reviewer_Name = adminDetails.Reviewer_Name;

  const response = await Admin.findOne({
    Reviewer_ID : Reviewer_ID,
    Reviewer_Name : Reviewer_Name
  })

  if(response){
    next();
  }
  else{
    res.status(411).json({
      msg : "Admin Doesn't Exists"
    })
  }
}

module.exports = adminMiddleware;