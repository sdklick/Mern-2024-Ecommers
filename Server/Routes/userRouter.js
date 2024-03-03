const express = require("express");
const userrouter = express.Router();
const login = require("../Controllers/login_controler");
const signup = require("../Controllers/signup_controler");

userrouter.post("/userdata", signup);

userrouter.post("/login", login);

module.exports = userrouter;
