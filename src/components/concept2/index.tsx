import Image from "next/image";
import Link from "next/link";
import styles from "src/components/concept2/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function Concept2() {
  return (
    <div className={`${styles.comcept2} ${utilStyles.inner} ${utilStyles.section}`}>
      <div className={styles.concept2_inner}>
        <picture className={`${styles.picture} ${"wow fadeInUp"}`}>
          <img src="/img/concept-2.png" alt="concept-2" />
        </picture>
        <div className={`${styles.message} ${"wow fadeInUp"}`}>
          <p className={styles.message_title}>
            合言葉は、
            <br />「 “可愛い” で 地球を守る！」
          </p>
          <p className={styles.message_text}>
            深刻化している環境問題に対して、否定や制限、禁止といった強制的な方法ではなく、明るく幸せな未来を目指して、「可愛い」「楽しい」の力を信じて、愛につながる選択を世の中に増やしていきます。
          </p>
        </div>
      </div>
    </div>
  );
}
