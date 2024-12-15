
import express from "express";
import MobileAd from "../model/Mobile.js";

const router2 = express.Router();

router2.get("/add", async (req, res) => {
  try {
    const data = await MobileAd.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router2.get("/:id", async (req, res) => {
  try {
    const data = await MobileAd.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Mobile ad not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router2.post("/ads", async (req, res) => {
  try {
    const newAd = new MobileAd(req.body);
    const savedAd = await newAd.save();
    res.status(200).json(savedAd);
  } catch (error) {
    res.status(400).json({ message: "Error saving mobile ad", error });
  }
});

export default router2;