const express = require("express");
const {
  createCollegeController,
  getCollege,
  getSingleCollege,
  updateCollege,
  deleteCollege,
} = require("../controller/college.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { checkRole } = require("../middleware/role.middleware");

const router = express.Router();

// add the college
router.post(
  "/addCollege",
  authMiddleware,
  checkRole(["admin"]),
  createCollegeController
);

// fetching all college
router.get("/getCollege", getCollege);

// fetching single college

router.get("/college/:id", getSingleCollege);

// update college details

router.put(
  "updateCollege/:id",
  authMiddleware,
  checkRole(["admin"]),
  updateCollege
);

// delete college

router.delete(
  "deleteCollege/:id",
  authMiddleware,
  checkRole(["admin"]),
  deleteCollege
);

module.exports = router;
