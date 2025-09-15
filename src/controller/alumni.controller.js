const alumniModel = require("../model/alumni.model");

async function createAlumni(req, res) {
  try {
    const {
      college,
      graduationYear,
      currentCompany,
      designation,
      linkedIn,
      willingToMentor,
    } = req.body;

    const userId = req.user._id;

    const isExist = await alumniModel.findOne({ user: userId });

    if (isExist) {
      return res.status(400).json({
        message: "Profile already exist",
      });
    }

    const alumni = await alumniModel.create({
      userId,
      college,
      graduationYear,
      currentCompany,
      designation,
      linkedIn,
      willingToMentor,
    });

    res.status(201).json({
      message: "Alumni profile created Successfully",
      alumni,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating alumni", error });
  }
}

async function getAllAlumni(req, res) {
  try {
    const alumni = await alumniModel
      .find()
      .populate("user", "fullName email role")
      .populate("college", "name location");
      res.status(200).json(alumni)
  } catch (error) {
    res.status(500).json({
        message:"Error in fetching alumni",
        error:error.message
    })
  }
}

module.exports = { createAlumni,getAllAlumni };
