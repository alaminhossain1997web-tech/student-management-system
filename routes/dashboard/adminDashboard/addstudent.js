const express = require ("express");
const addStudentController = require("../../../controllers/adminController/addstudent");
const route = express.Router();

const addstudent = route.get("/add",addStudentController)

module.exports = addstudent;