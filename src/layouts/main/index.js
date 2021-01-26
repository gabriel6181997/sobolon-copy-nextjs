import {Header} from "src/components/header";
import styles from "src/layouts/main/index.module.scss";

export function MainLayout({children}) {
  return (
    <>
     <Header />
     <main className={styles.main}>{children}</main>
    </>
  )
}

