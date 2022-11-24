import React from "react";
import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Moitabank</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
