import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/feature/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

const ITEMS = [
 {
   src:"/img/feature-1.png",
   title: `素材は海で採れた\nマイクロプラスチック`,
   name:"feature-1",
 },
 {
   src:"/img/feature-2.png",
   title:" 個性あふれる \n可愛い”デザイン",
   name:"feature-2",
 },
 {
   src:"/img/feature-3.png",
   title: "世界にひとつだけの \n一点物アクセサリー",
   name:"feature-3"
 },
];

export function Feature() {
  return(
    <section id="feature" className={`${utilStyles.section} ${utilStyles.inner}`}>
    <h2 className={utilStyles.util_title}>Feature</h2>
    <ul className={styles.list}>
      {ITEMS.map(({src, title, name}) => (
        <li className={styles.item}>
          <Link href="/">
            <a className={styles.item_link}>
             <div className={styles.item_picture}>
               <img src={src} alt={name}/>
             </div>
             <div className={styles.item_body}>
              <p className={styles.item_title}>
                {title}
              </p>
             </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
  )
}
