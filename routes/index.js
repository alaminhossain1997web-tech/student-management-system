const express = require ("express");
const route = express.Router();
const baseUrl = process.env.BASE_URL
const authRoute = require("./authRouts/index");
const dashboardRoute = require("./dashboard/index");
const profileRoute = require("./profileRoutes");
const access = require("../middlewares/authMiddleware/access");
const protect = require("../middlewares/authMiddleware/protect");


route.use(baseUrl, authRoute)
route.use(baseUrl, protect, access, dashboardRoute)
route.use(baseUrl, profileRoute)


module.exports = route;