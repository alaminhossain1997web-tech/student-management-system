const express = require ("express");
const userProfileController = require("../../controllers/Profile/userProfileController");
const route = express.Router();

const studentProfile = route.get("/me", userProfileController)
module.exports = studentProfile