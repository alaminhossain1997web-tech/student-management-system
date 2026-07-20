const express = require ("express");
const route = express.Router();
const loginRoute = require("./login");
const registrationRoute = require("./registration");
const verifyRoute = require("./verifyOTP")

const authRoute = route.use("/auth", loginRoute, registrationRoute, verifyRoute);

module.exports = authRoute;