import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/header/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function Top(){
  return(
    <section className={`${styles.top} ${utilStyles.inner}`}>
      <div
       styles={{
         backgroundImage: "url("+ `${require("public/img/top.png")}` +")",
         paddingTop: "55%",
         width:"100%",
         height:"100%",
         backgroundPosition: "top right",
         backgroundSize: "82.5%",
         backgroundRepeat: "no-repeat"
       }}
      >
      </div>
      <div className={styles.message}>
        <p className={styles.message_title}>
          “可愛い” で <br className={utilStyles.is_pr} />地球を守る！
        </p>
        <p className={styles.message_text}>
          海洋マイクロプラスチックを素材とした<br />ハンドメイドアクセサリー「sobolon」
        </p>
      </div>
    </section>

  );
}
