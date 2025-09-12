import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("message route");
});

export default router;
