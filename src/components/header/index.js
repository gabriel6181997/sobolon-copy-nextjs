import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/header/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";
import LinkSmoothScroll from 'src/library/SmoothScroll/LinkSmoothScroll.js';

const NAVITEMS= [
  {
    link:"/#concept",
    word: "Concept",
  },
  {
    link:"/#feature",
    word:"Feature",
  },
  {
    link:"/#products",
    word:"Products",
  },
  {
    link:"/#news",
    word:"News",
  },
  {
    link:"/#contact",
    word:"Contact",
  },
];

export function Header() {
  return(
    <header className={styles.header}>
    <div className={styles.header_inner}>
      <h1 className={styles.logo}>
        <Image src="/img/logo.png" alt="sobolon" width={120} height={22}/>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {NAVITEMS.map(({link, word}) => (
            <li className={styles.nav_item} key={word}>
              <LinkSmoothScroll href={link}>
                <a className={styles.nav_item_link}>{word}</a>
              </LinkSmoothScroll>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
  )
}


