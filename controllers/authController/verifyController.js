const express = require("express");
const userSchema = require("../../models/userSchema");

 // otp verification function
  const verifyController = async(req,res) =>{
    const {email, OTP} = req.body;
    try {
      const user = await userSchema.findByIdAndUpdate({email,OTP, OTPExpires:{ $gt: Date.now()}},{isvalidEmail : true, OTP:null},{returnDocument: "after"});
      if (!user){
        return res.status(400).json({message: "Invalid request!"})
      }
      res.status(200).json({message: "Email verify successfully"})
    } catch (error) {
     res.status(400).json({message: "Sorry! email verification failed", error})
      
    }
    
  }
  module.exports = verifyController