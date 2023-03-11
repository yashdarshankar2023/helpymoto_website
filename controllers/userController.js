const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Hire = require('../models/userModel')

const HireDevloper=()=>{



const {name,email,phone}=req.body;
const hire=new Hire({
  name,
  email, 
  phone
})

hire.save();
console.log("user detais added")

}

module.exports = {
 HireDevloper
}
