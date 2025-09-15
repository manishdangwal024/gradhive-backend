require("dotenv").config()
const app =require("./src/app");
const connectTodb= require("./src/db/db");

connectTodb();

app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
})