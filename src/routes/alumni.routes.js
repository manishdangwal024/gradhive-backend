const express = require("express");
const { verifyToken } = require("../middleware/tokenVerify.middleware");
const { getAllAlumni, createAlumni } = require("../controller/alumni.controller");


const router = express.Router();



// to create the alumni
router.post("/createAlumni", verifyToken,createAlumni );



// to fetch all the alumni
router.get("/alumnilist", getAllAlumni);


module.exports=router