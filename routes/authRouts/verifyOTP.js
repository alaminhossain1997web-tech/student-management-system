const express = require ("express");
const verifyController = require("../../controllers/authController/verifyController");
const route = express.Router();

const verify = route.post("/verification", verifyController);

module.exports = verify