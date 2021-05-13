import Head from 'next/head'
import { Home } from "../frontend/containers";
import React from "react";
import { withRedux } from "reduxConf";

const SalesPage = () => {
    return (
        <>
          <Head>
            <title>Sales</title>
            <meta name="title" content="Sales" />
          </Head>
    
          <Home />
        </>
      );
};

export default withRedux(SalesPage);
