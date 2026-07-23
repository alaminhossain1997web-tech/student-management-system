
const express = require ("express");
const route = express.Router();
const deleteStudentController = require("../../../controllers/adminController/deleteStudent")
const deletStudent = route.get("/delete",deleteStudentController)


module.exports = deletStudent;