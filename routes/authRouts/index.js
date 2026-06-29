const express = require ("express");
const route = express.Router();
const loginRoute = require("./login");
const registrationRoute = require("./registration");

 const authRoute =route.use("/auth", loginRoute, registrationRoute);
module.exports = authRoute;