import { LoginLayou } from "../frontend/containers";
import React from "react";
import { withRedux } from "reduxConf";

const Login = () => {
  return <LoginLayou />;
};

export default withRedux(Login);
