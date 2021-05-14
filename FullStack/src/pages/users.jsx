import Head from "next/head";
import InsideMenu from "../frontend/components/InsideMenu";
import React from "react";
import { Users } from "../frontend/containers";
import menu from 'lib/constants/menus/user.json'
import { withRedux } from "reduxConf";

const UsersPage = () => {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="title" content="Users" />
      </Head>

    <InsideMenu menu={menu}/>
    </>
  );
};

export default withRedux(UsersPage);
