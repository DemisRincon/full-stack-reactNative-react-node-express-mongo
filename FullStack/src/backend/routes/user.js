import { Router, response } from "express";
import {
  isAGodUserCreation,
  isAValidUser,
  userExist,
} from "../middlewares/user";

import User from "../model/user";
import { nextApp } from "../";

const router = Router();
router.post("/auth", isAValidUser(), async (req, res) => {
  console.log(req.app);
  return nextApp.render(req, res, `/`, req.query);
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
