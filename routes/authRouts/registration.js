const express = require ("express");
const route = express.Router();

const registration = route.get("/registration",(req,res)=>{
    res.send("Welcome to the registration page")
})

module.exports = registration;