const collegeModel = require("../model/college.model");

//  create college
async function createCollegeController(req, res) {
  try {
    const { name, location, establishedYear, collegeId,admin } = req.body;
    const college = await collegeModel.create({
      name,
      location,
      establishedYear,
      collegeId,
      admin,// yaha user._id (jiska role = "admin" hai) aayega
    });
    res.status(201).json({
      message: "college created sucessfully",
      college,
    });
  } catch (error) {
    res.status(500).json({
      message: "error in creating in college",
      error,
    });
  }
}





// get all colleges
async function getCollege(req, res) {
  try {
    const colleges = await collegeModel.find();
    res.status(200).json({
      message:"colleges fetched successfully",
      colleges
    })
  } catch (error) {
    res.status(500).json({
      message: "Error in fetching colleges",
      error,
    });
  }
}

// get single college

async function getSingleCollege(req, res) {
  try {
    const college = await collegeModel.findById(req.params.id);
    if (!college) {
      return res.status(404).message({
        message: "college not found",
      });
    }
    res.status(200).json(college);
  } catch (error) {
    res.status(500).json({
      message: "error in fetching college",
      error,
    });
  }
}

// update college

async function updateCollege(req, res) {
  try {
    const { name, location, establishedYear, collegeId ,admin} = req.body;

    const college = await collegeModel.findByIdAndUpdate(
      req.params.id,
      { name, location, establishedYear, collegeId,admin },
      { new: true }
    );

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }
    res.status(200).json({
      message: "College updated sucessfully",
      college,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in updating college",
      error,
    });
  }
}

// delete college

async function deleteCollege(req, res) {
  try {
    const college = await collegeModel.findByIdAndDelete(req.params.id);
    if (!college) {
      return res.status(404).json({
        message: "college not found",
      });
    }
    res.status(200).json({
      message: "college deleted successfully",
    });
  } catch (error) {
    json({
      messsage: "Error deleting college",
      error,
    });
  }
}

module.exports = {
  createCollegeController,
  getCollege,
  getSingleCollege,
  updateCollege,
  deleteCollege,
};
