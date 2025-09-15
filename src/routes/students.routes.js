const express = require("express");
const {
  getStudentProfile,
  createStudentProfile,
} = require("../controller/student.controller");
const { verifyToken } = require("../middleware/tokenVerify.middleware");
getStudentProfile;
const router = express.Router();

router.post("/createProfile", verifyToken, createStudentProfile);
router.get("/getProfile", verifyToken, getStudentProfile);

module.exports = router;
