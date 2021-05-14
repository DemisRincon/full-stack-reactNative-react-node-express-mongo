import { isSuperAdminCreation, userExist } from "../middlewares/user";
import { setBase64, setSHA1 } from "lib/methods/security";

import { $security } from "config";
import { Router } from "express";
import User from "../model/user";
import jwt from "jsonwebtoken";

const router = Router();
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await User.find({ email, password });
    if (response[0]._id) {
      const userData = response[0];

      userData.token = setBase64(
        setSHA1(process.env.SECRET_KEY) + userData._id
      );
      delete userData.password
      jwt.sign(
        { data: setBase64(userData) },
        process.env.SECRET_KEY,
        { expiresIn: $security().expiresIn },
        (error, accessToken) => {
          if (error) {
            res.status(403).send({ isUser: false, message: "Can't Login" });
          } else {
            res.cookie("at", accessToken,{expire : $security().expiresIn }).json({ response: [response] });
          }
        }
      );
    }
  } catch (error) {
    res.status(403).json({
      response: [{ isUser: false, message: "User or password are incorrect" }],
    });
  }
});

router.post(
  "/userCreation",
 /* isSuperAdminCreation(),
  userExist(),*/
  async (req, res) => {
    const { name, email, password, permissions, userCreator,photo } = req.body;
    try {
      const user = new User({
        name,
        email,
        password,
        permissions,
        userCreator,
        photo
      });

      console.log("user",user);
      const response = await user.save();
      console.log("user",response);
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
