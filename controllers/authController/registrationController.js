const express = require ("express");
const route = express.Router();
const userSchema = require("../../models/userSchema");
const { isvalidEmail, isvalidpassword } = require("../../helpers/utils");

const registrationController = async (req, res) => {
    const {name, email, password} =req.body;
     
    const errors = {};
    
    if (!name || name.trim() === "") {
    errors.name = "Name is required";
  }
  // "isvalidEmail" Email validatio function import from helpers/utils.js
    if (!email || email.trim() === "" || !isvalidEmail(email) ) {
    errors.email = "Valid email is required";
  }
    if (!password || password.trim() === "" || !isvalidpassword(password) ) {
    errors.password = "Valid Password is required";
  }
    if (Object.keys(errors).length > 0) {
    return res.status(400).json({message:errors});
  }
  // check if email already exists in the database
  const existingemail = await userSchema.findOne({email});
  if (existingemail) {
    return res.status(400).json({message:"Email already exists"});
  }
    const user = await userSchema.create({name,email,password});
    res.status(200).json({message:"User registered successfully", user});
}

module.exports = registrationController;