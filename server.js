import express  from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();



app.get("/api/contacts",(req,res)=>{
    res.status(200).json({message:"get all contacts"});
}) 
app.get("/api/contacts",(req,res)=>{
    res.send("get all contacts");
})
const PORT = process.env.PORT||5000;
console.log("server started");

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})