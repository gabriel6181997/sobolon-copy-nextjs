import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/footer/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

const NAVITEMS = [
  {
    title:"プライバシーポリシー",
  },
  {
    title:"特定商取引法に基づく表記",
  },
];

const SNSITEMS = [
  {
    arialabel:"Twitter",
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    arialabel:"Instagram",
    icon:<i className="fab fa-instagram"></i>,

  },
  {
    arialabel:"Line",
    icon:<i className="fab fa-line"></i>,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/img/logo.png" alt="sobolon" />
      </div>

      <ul className={styles.nav_list}>
        {NAVITEMS.map(({title}) => (
          <li className={styles.nav_item} key={title}>
            <Link href="/">
              <a className={styles.nav_item_link}>
               {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.sns_list}>
        {SNSITEMS.map(({arialabel, icon}) => (
          <li className={styles.sns_item} key={arialabel}>
            <Link href="/">
              <a className={styles.sns_item_link} aria-label={arialabel}>
                {icon}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>
        <small lang="en">© 2020 sobolon All rights reserved</small>
      </p>
    </footer>
  );
}
