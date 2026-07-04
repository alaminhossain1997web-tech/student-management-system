const express = require ("express");
const route = express.Router();
const baseUrl = process.env.BASE_URL
const authRoute = require("./authRouts/index");
const dashboardRoute = require("./dashboard/index");
route.use(baseUrl, authRoute)
route.use(baseUrl, dashboardRoute)
module.exports = route;