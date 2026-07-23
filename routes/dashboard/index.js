const express = require ("express");
const route = express.Router();
const addstudent = require("../../routes/dashboard/adminDashboard/addstudent");
const deletestudent = require("../../routes/dashboard/adminDashboard/deleteStudent");
const access = require("../../middlewares/authMiddleware/access");
const protect = require("../../middlewares/authMiddleware/protect");

const dashboardRoute = route.use("/dashboard",access,protect,addstudent,deletestudent);

module.exports = dashboardRoute;