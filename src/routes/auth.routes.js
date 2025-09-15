const express= require("express");
const { registerController, loginController } = require("../controller/auth.controller");

const router= express.Router();


// /api/auth/register
router.post("/register",registerController)

// /api/auth/login
router.post("/login",loginController)


module.exports= router
