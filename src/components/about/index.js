import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/about/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function About() {
  return (
    <div className={`${styles.about} ${utilStyles.section}`}>
      <div className={`${styles.about_inner} ${utilStyles.inner} ${"wow fadeInUp"}`}>
        <p className={styles.title}>
          消費者である私たちが、 <br />
          地球環境のためにできることは何か？
        </p>
        <p className={styles.text}>
          そんな視点からこのブランドは生まれました。
          <br />
          オシャレを楽しむ気持ちを大切にしながらも、
          <br className={utilStyles.is_pc} />
          ただ可愛いだけじゃない環境にやさしいアクセサリーを選ぶ人が増えていったら…
          <br />
          その変化は少しずつ、だけども本質的に、
          <br />
          この世界をHappyに変えていくのだと、私たちは考えます。
        </p>
      </div>
    </div>
  );
}
