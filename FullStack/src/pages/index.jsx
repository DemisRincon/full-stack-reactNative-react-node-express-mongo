import Head from "next/head";
import { Home } from "../frontend/containers";
import React from "react";
import { withRedux } from "reduxConf";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home" />
      </Head>
      <Home />
    </>
  );
};

export default withRedux(HomePage);
