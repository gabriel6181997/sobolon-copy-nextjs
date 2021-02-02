import clsx from "clsx";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import styles from "src/layouts/main/index.module.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import WOW from "wow.js";

export function MainLayout({ children }) {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.WOW = require('wow.js');
    }
    new WOW.WOW().init();

    // const wow = new WOW({live: false});
    // wow.init();
  });
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
