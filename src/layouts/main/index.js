import clsx from "clsx";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import styles from "src/layouts/main/index.module.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export function MainLayout({ children }) {
  useEffect(() => {
    const wow = require("wow.js");
    new wow().init();
  }, []);

  return (
    <>
      <Head>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
