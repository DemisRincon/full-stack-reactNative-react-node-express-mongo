import User from "../model/user";
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
