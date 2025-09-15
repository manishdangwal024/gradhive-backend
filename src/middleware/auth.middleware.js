const jwt= require("jsonwebtoken")
const userModel = require("../model/user.model");

async function authMiddleware(req,res,next){
    const {token}=req.token;
    if(!token){
        return res.status(401).json({
            message:"unauthorized user"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select("-password");
        req.user=user;
        next();     
    } catch (error) {
        res.status(401).json({
            message:"unauthorized user"
        })
    }
}
module.exports={authMiddleware}