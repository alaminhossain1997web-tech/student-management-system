
const express = require ("express");
const route = express.Router();

const deletStudent = route.get("/delete",(req,res)=>{
    res.send("Welcome to the delete student page")
})

module.exports = deletStudent;