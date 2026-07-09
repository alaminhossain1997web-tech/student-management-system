const express = require("express");
const route = express.Router();
const userSchema = require("../../models/userSchema");
const { isvalidEmail, isvalidpassword, otpGenerator, otpExpires } = require("../../helpers/utils");
const { mailSender } = require("../../helpers/mailService");

const registrationController = async (req, res) => {
  const {
    name,
    email,
    password,
    OTP,
    OTPExpires
  } = req.body;

  const errors = {};

  if (!name || name.trim() === "") {
    errors.name = "Name is required";
  }
  // "isvalidEmail" Email validatio function import from helpers/utils.js
  if (!email || email.trim() === "" || !isvalidEmail(email)) {
    errors.email = "Valid email is required";
  }
  if (!password || password.trim() === "" || !isvalidpassword(password)) {
    errors.password = "Valid Password is required";
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: errors
    });
  }
  // check if email already exists in the database
  const existingemail = await userSchema.findOne({
    email
  });
  if (existingemail) {
    return res.status(400).json({
      message: "Email already exists"
    });
  }

  // otp genarating
  const otp_num = otpGenerator()

  // otp expire time
   const expires =  otpExpires


  // user creation
  const user = await userSchema.create({
    name,
    email,
    password,
    OTP: otp_num,
    OTPExpires : expires
  });
  // mailsender function import from helpers/mailService.js
  // if user create successfully then send the otp to the user email for verification
  await mailSender({email, subject :"Please verify your email", OTP: otp_num});

  res.status(200).json({
    message: "User registered successfully please verify your email",
    user
  });
}

module.exports = registrationController;