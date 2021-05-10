import { Router, response } from "express";

import User from "../model/user";

const router = Router();
router.post("/auth", (req, res) => {
  res.send("we ar login");
});
router.post("/userCreation", async (req, res) => {
  const { name, email, password,permissions } = req.body;
  const user = new User({
    name,
    email,
    password,
    permissions,
  });
  try {
    const response = await user.save();
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ response: { message: error } });
  }
});
router.get("/getUsers", async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ response: { message: error } });
  }
});

export default router;
