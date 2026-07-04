const express = require ("express");
const route = express.Router();

const loginController = async (req, res) => {
    res.send("Welcome to the login page")
}

module.exports = loginController;