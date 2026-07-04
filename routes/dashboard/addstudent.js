
const express = require ("express");
const route = express.Router();

const addstudent = route.get("/add",(req,res)=>{
    res.send("Welcome to the add student page")
})

module.exports = addstudent;