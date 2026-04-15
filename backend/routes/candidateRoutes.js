import express from "express";
import Candidate from "../models/Candidate.js";

const router = express.Router();

/* GET all */
router.get("/", async (req, res) => {
  try {
    console.log("GET candidates API called");
    const data = await Candidate.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* POST */
router.post("/", async (req, res) => {
  try {
    const newCandidate = new Candidate(req.body);
    await newCandidate.save();
    res.json({ success: true, data: newCandidate });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  try {
    await Candidate.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.json({ success: true, message: "Updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* PATCH */
router.patch("/:id", async (req, res) => {
  try {
    await Candidate.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.json({ success: true, message: "Updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  try {
    await Candidate.deleteOne({ _id: req.params.id });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

console.log("start");

setTimeout(() => {
  console.log("hi");
}, 1000);

console.log("End");

export default router;