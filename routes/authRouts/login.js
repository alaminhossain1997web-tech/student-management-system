const express = require ("express");
const route = express.Router();

const login = route.get("/login",(req,res)=>{
    res.send("Welcome to the login page")
})

module.exports = login;