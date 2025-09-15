const jwt= require("jsonwebtoken")
const userModel = require("../model/user.model")

async function verifyToken (req,res,next) {
    try {
        let token = req.cookies?.token || "";

        if(!token){
            return res.status(401).json({
                message:"No token,authorization denied"
            })
        }

        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user=await userModel.findById(decoded.id).select("-password");
        if(!req.user){
            return res.status(401).json({
                message:"USer not found"
            })
        }
        
        next()
    } catch (error) {
        res.status(401).json({
            message:"Invalid or expired token"
        })
    }
    
}


module.exports={verifyToken}