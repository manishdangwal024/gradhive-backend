const cookieParser = require("cookie-parser");
const express = require("express");
const authRouter = require("./routes/auth.routes");
const collegeRouter = require("./routes/college.routes");
const studentRouter = require("./routes/students.routes");
const alumniRouter= require("./routes/alumni.routes")
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/college", collegeRouter);
app.use("/api/student", studentRouter);
app.use("/api/alumni",alumniRouter)

module.exports = app;
