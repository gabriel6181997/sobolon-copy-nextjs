import { NextSeo } from 'next-seo';
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import styles from "src/layouts/main/index.module.scss";
import React, {useEffect } from "react";
import Head from "next/head";
import type {LayoutProps} from "src/layouts/types";

export function MainLayout({ title, description, children }:LayoutProps) : JSX.Element{
  useEffect(() => {
    const wow = require("wow.js");
    new wow().init();
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{url:`https://sobolon-copy-nextjs.vercel.app/`, images:[{url: "img/ogp.png", alt:"sobolon"}]}}
      />
      <Head>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
