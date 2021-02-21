import Image from "next/image";
import Link from "next/link";
import styles from "src/components/concept/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function Concept(): JSX.Element{
  return(
    <section id="concept" className={`${utilStyles.section} ${utilStyles.inner}`}>
      <h2 className={`${utilStyles.util_title} ${"wow fadeInUp"}`}>Concept</h2>
      <div className={styles.concept_inner}>
        <picture className={`${styles.picture} ${"wow fadeInUp"}`}>
          <img src="/img/concept-1.png" alt="concept picture" />
        </picture>
        <div className={`${styles.message} ${"wow fadeInUp"}`}>
          <p className={styles.message_title}>
            可愛くてステキなのは当たり前。<br />
            地球にやさしくあるのも当たり前。
          </p>
          <p>
            「sobolon」は、海洋汚染の要因であるマイクロプラスチックを回収し、それらを素材としたハンドメイドアクセサリーを製作しているブランドです。
          </p>
        </div>
      </div>
    </section>
  )
}
