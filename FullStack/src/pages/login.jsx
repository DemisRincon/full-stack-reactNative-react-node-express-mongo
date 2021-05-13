import Head from "next/head";
import { LoginLayou } from "../frontend/containers";
import React from "react";
import { withRedux } from "reduxConf";

const Login = () => {
  return (
    <>
      <Head>
        <title>Sales</title>
        <meta name="title" content="Sales" />
      </Head>
      <LoginLayou />;
    </>
  );
};

export default withRedux(Login);
