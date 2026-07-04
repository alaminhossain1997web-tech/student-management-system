const express = require ("express");
const route = express.Router();
const userSchema = require("../../models/userSchema")

const registrationController = async (req, res) => {
    const {name, email, password} =req.body;
     
    const errors = {};
    
    if (!name || name.trim() === "") {
    errors.name = "Name is required";
  }
    if (!email || email.trim() === "") {
    errors.email = "Email is required";
  }
    if (!password || password.trim() === "") {
    errors.password = "Password is required";
  }
    if (Object.keys(errors).length > 0) {
    return res.status(400).json({message:errors});
  }
    
    const user = await userSchema.create({name,email,password});
    res.status(200).json({message:"User registered successfully", user});
}

module.exports = registrationController;