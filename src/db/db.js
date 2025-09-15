const mongoose= require("mongoose")

 function connectTodb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database is connected");
    })
    .catch((error)=>{
        console.log(error,"error in connecting to the database");
})
}

module.exports=connectTodb