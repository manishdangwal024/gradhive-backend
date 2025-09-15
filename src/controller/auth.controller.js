const userModel = require("../model/user.model");
const jwt= require("jsonwebtoken")
const bcrypt= require("bcryptjs")


async function registerController(req,res){
    const {fullName:{firstName,lastName},email,password,role,}=req.body;

    const isUserExist=await userModel.findOne({
       email:email
    })
    if(isUserExist){
        return res.status(400).json({
            message:"user already exist"
        })
    }

    const hashPassword=await bcrypt.hash(password,10)

    const user=await userModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password:hashPassword,
        role
    })
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        message:"user register successfully",
        user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            role:user.role
        }
    })
}




async function loginController(req,res) {
    const {email,password}=req.body;

    const user= await userModel.findOne({
        email
    })
    if(!user){
        return res.status(400).json({
            message:"Inavlid email"
        })
    }

    const isPasswordValid= bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(200).json({
        message:"user logged in sucessfully",

        user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email
        }
    })
}
module.exports= {registerController,loginController}