const express = require ("express");
const studentProfile = require("./studentProfile");
const route = express.Router();

const profileRoute = route.use("/profile", studentProfile)
module.exports = profileRoute