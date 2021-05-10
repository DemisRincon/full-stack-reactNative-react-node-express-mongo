import User from "../model/user";

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
        const userData = response[0]
       
      return next();
    }
  } catch (error) {
    res.status(404).json({
      response: [{ isUser: false, message: "User or password are incorrect" }],
    });
  }
};
