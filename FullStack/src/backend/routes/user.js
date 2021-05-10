import { Router, response } from "express";
import { isAGodUserCreation, userExist } from "../middlewares/user";

import User from "../model/user";

const router = Router();
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await User.find({ email, password });
    res
      .status(200)
      .json({ response: [{ isUser: true, userId: response[0]._id }] });
  } catch (error) {
    res.status(404).json({
      response: [{ isUser: false, message: "User or password are incorrect" }],
    });
  }
});

router.post(
  "/userCreation",
  isAGodUserCreation(),
  userExist(),
  async (req, res) => {
    const { name, email, password, permissions, userCreator } = req.body;
    try {
      const user = new User({
        name,
        email,
        password,
        permissions,
        userCreator,
      });
      const response = await user.save();
      res.status(200).json({ response });
    } catch (error) {
      res
        .status(400)
        .json({ response: { message: "Failuer creating an new user" } });
    }
  }
);

router.get("/getUsers", async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ response: { message: error } });
  }
});

export default router;
