import { setBase64, setSHA1 } from "lib/methods/security";

import { $security } from "config";
import User from "../model/user";
import jwt from "jsonwebtoken";
import { nextApp } from "../index";

export const userExist = () => async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const response = await User.find({ email, password });
    if (response[0]._id) {
      res.status(403).json({
        response: {
          message: "User already exist",
        },
      });
    }
  } catch (error) {
    return next();
  }
};

export const isAGodUserCreation = () => async (req, res, next) => {
  const { permissions, userCreator } = req.body;

  try {
    const userCreatorPermision = await User.find({ _id: userCreator });
    if (permissions === "god") {
      if (userCreatorPermision[0].permissions !== "god") {
        res.status(403).json({
          response: {
            message:
              "You dont have enoght permision to create this kind of user",
          },
        });
      }
    }
    return next();
  } catch (error) {
    res.status(403).json({
      response: {
        message: "You dont have enoght permision to create this kind of user",
      },
    });
  }
};

export const isAValidUser = () => async (req, res, next) => {
  try {
    const response = await User.find({ email, password });
    if (response[0]._id) {
      const userData = response[0];
      userData.token = setBase64(
        `${setSHA1(process.env.SECRET_KEY)}${userData._id}`
      );
      jwt.sign(
        { data: setBase64(userData) },
        process.env.SECRET_KEY,
        { expiresIn: $security().expiresIn },
        (error, accessToken) => {
          if (error) {
            res.status(403).send({ isUser: false, message: "Can't Login" });
          } else {
            res.session("at", accessToken);
            return next();
          }
        }
      );
      return next();
    }
  } catch (error) {
    res.status(404).json({
      response: [{ isUser: false, message: "User or password are incorrect" }],
    });
  }
};
export const isConnected =
  ({ isLogged = true, redirectTo = false, at = false }) =>
  async (req, res, next) => {
    try {
      const accessToken = req.cookies.at || at;
      console.log("ACCES TOKEN", accessToken);
    } catch (error) {
      console.log("catiching", redirectTo);
    }
    return nextApp.render(req, res, `${redirectTo || "/"}`, req.query);
    return next();
  };
