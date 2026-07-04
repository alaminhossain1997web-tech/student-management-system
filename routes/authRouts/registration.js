const express = require ("express");
const route = express.Router();
const registrationController = require("../../controllers/authController/registrationController")
const registration = route.post("/registration", registrationController);

module.exports = registration;