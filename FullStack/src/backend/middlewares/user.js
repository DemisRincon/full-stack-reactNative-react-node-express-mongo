import User from "../model/user";
import { nextApp } from "../index";
import { verifySeverCookie } from "lib/methods";

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

export const isSuperAdminCreation = () => async (req, res, next) => {
  const { permissions, userCreator } = req.body;

  try {
    const userCreatorPermision = await User.find({ _id: userCreator });
    if (permissions === "superAdmin") {
      if (userCreatorPermision[0].permissions !== "superAdmin") {
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

export const isConnected = (redirectTo,redirectNoConnected) => async (req, res, next) => {
  try {
    const userConnected = await User.find(verifySeverCookie("at", req));

    if (userConnected[0]._id) {
      if (redirectTo) {
        
        return res.redirect(redirectTo);
      }
      return next()
    }
  } catch (error) {
    if (redirectNoConnected) {
      return res.redirect(redirectNoConnected);
    }
    return next();
  }
};
