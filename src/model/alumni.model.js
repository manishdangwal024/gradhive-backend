const mongoose = require("mongoose");

const alumniSchema= new mongoose.Schema({
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
    graduationYear:{
        type:Number,
        required:true
    },
    currentCompany:String,
    designation:String,
    linkedIn:String,
    willingToMentor:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
const alumniModel = mongoose.model("alumni",alumniSchema)

module.exports=alumniModel