import Head from 'next/head'
import { Home } from "../frontend/containers";
import React from "react";
import { withRedux } from "reduxConf";

const ProductsPage = () => {
    return (
        <>
          <Head>
            <title>Products</title>
            <meta name="title" content="Products" />
          </Head>
    
          <Home />
        </>
      );
};

export default withRedux(ProductsPage);
