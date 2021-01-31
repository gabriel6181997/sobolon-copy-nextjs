import clsx from "clsx";
import {Header} from "src/components/header";
import {Footer} from "src/components/footer";
import styles from "src/layouts/main/index.module.scss";

export function MainLayout({children}) {
  return (
    <>
     <Header />
     <main className={styles.main}>{children}</main>
     <Footer  />
    </>
  )
}

