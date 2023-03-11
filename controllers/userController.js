const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Hire = require('../models/userModel')

const HireDevloper=()=>{



const {name,type,problem,location:{lat,long}}=req.body;
const hire=new Hire({
  name,type,problem,location:{lat,long}
})

hire.save();
console.log("user detais added")

}

module.exports = {
 HireDevloper
}
