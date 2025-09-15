const express = require("express");
const { verifyToken } = require("../middleware/tokenVerify.middleware");
const { getAllAlumni, createAlumni } = require("../controller/alumni.controller");


const router = express.Router();


router.post("/createAlumni", verifyToken,createAlumni );

router.get("/alumnilist", getAllAlumni);



module.exports=router