const express = require('express');
const Users = require('./db');


const app = express();

app.use(express.json());

app.get('/users',async(req,res)=>{
  const users = await Users.find({});
  res.json({
    Users : users
  })
})


app.listen(3000);