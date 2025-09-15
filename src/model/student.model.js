const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    college:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"college",
        required:true
    },
    rollNumber:Number,
    department:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    skills:[String],
},{
    timestamps:true
});
const studentModel= mongoose.model("student",studentSchema)

module.exports=studentModel