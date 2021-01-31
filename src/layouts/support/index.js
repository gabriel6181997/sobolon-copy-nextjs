import clsx from "clsx";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import styles from "src/layouts/main/index.module.scss";

export function SupportLayout({ children }) {
  return (
    <>
      <Head>
        <title>sobolon - 海洋マイクロプラスチックを素材とした ハンドメイドアクセサリー</title>
        <meta name="description" content="サイトの概要文" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
