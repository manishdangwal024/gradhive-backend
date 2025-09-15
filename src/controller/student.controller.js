const studentModel = require("../model/student.model");

async function createStudentProfile(req, res) {
  try {
    const { college, rollNumber, department, batch, skills } = req.body;

    const userID = req.user._id;

    const isExist = await studentModel.findOne({ user: userID });
    if (isExist) {
      return res.status(400).json({
        message: "Profile already exist",
      });
    }
    
    const student = await studentModel.create({
      user: userID,
      college,
      rollNumber,
      department,
      batch,
      skills,
    });

    return res.status(201).json({
      message: "Student Profile created sucessfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "error in creating profile",
      error,
    });
  }
}

async function getStudentProfile(req, res) {
  try {
    const student = await studentModel
      .findOne({
        user: req.user._id,
      })
      .populate("user", "fullName email role")
      .populate("college", "name location establishedYear collegeId");
    if (!student) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
        message:error.message
    })
  }
}
module.exports = { createStudentProfile, getStudentProfile };
