import express from "express";
import { Login } from "../model/Login.js";

export const router = express.Router();

router.post("/login", async (req, res) => {
  const loginData = req.body;

  try {
    const user = await new Login(loginData);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Error in login", error });
  }
});

router.get("/user",async(req,res)=>{
  try{
  const users= await Login.find({});
  return res.status(200).json(users);
  }
  catch(error){
    console.error("Error in Geeting Data");
    res.status(500).json({message:"Error",error})
  }

})
