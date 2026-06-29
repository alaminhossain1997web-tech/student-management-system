const express = require ("express");
const route = express.Router();
const baseUrl = process.env.BASE_URL
const authRoute = require("./authRouts/index");
route.use(baseUrl, authRoute)
module.exports = route;