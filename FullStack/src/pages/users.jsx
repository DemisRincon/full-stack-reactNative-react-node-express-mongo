import Head from "next/head";
import { Home } from "../frontend/containers";
import React from "react";
import { withRedux } from "reduxConf";

const UsersPage = () => {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="title" content="Users" />
      </Head>

      <Home />
    </>
  );
};

export default withRedux(UsersPage);
