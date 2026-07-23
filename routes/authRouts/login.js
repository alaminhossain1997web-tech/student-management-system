const express = require ("express");
const route = express.Router();
const loginController = require("../../controllers/authController/loginController");

const login = route.post("/login", loginController);

module.exports = login;