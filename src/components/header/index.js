import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/header/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function Header() {
  return(
    <header className={styles.header}>
    <div className={`${styles.header_inner} ${utilStyles.inner}`}>
      <h1>
        <Image src="/img/logo.png" alt="sobolon" width={120} height={22}/>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link href="#concept">
              <a className={styles.nav_item_link}>Concept</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#feature">
              <a className={styles.nav_item_link}>Feature</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#products">
              <a className={styles.nav_item_link}>Products</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#news">
              <a className={styles.nav_item_link}>News</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="#contact">
              <a className={styles.nav_item_link}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}


