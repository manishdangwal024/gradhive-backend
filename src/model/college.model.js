const mongoose = require("mongoose");
const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: String,
    establishedYear: Number,
    collegeId: String,
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const collegeModel = mongoose.model("college", collegeSchema);

module.exports = collegeModel;
