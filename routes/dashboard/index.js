const express = require ("express");
const route = express.Router();
const addstudentRoute = require("./addstudent");
const deletestudentRoute = require("./deletestudent");


 const dashboardRoute = route.use("/dashboard", addstudentRoute, deletestudentRoute);
module.exports = dashboardRoute;