import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/news/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

const NEWSITEMS = [
  {
    src:"/img/news-1.png",
    alt:"news-1",
    datetime:"2020-02-04",
    date:"2020年2月4日",
    title:" き業展終了！次回は2/11(火)フェスタ出店します。",
    text:" 「き業展」2日目！大盛況に終わりました\( ˆoˆ)/来てくださったみなさん本当にありがとうございました！やっぱり、地元多治見での出店はみ…",
  },
  {
    src:"/img/news-2.png",
    alt:"news-2",
    datetime:"2020-01-20",
    date:"2020年1月20日",
    title:" “可愛い” で 地球を守る！海洋マイクロプラスチックを使ったハンドメイドアクセサリー屋さん【sobolon】",
    text:"こんにちは！私は、「 “可愛い”で地球を守る！」をテーマに、昨今、環境問題として話題になっている、マイクロプラスチックを使ったアクセサリー…",
  },
  {
    src:"/img/news-3.png",
    alt:"news-3",
    datetime:"2020-11-23",
    date:"2020年11月23日",
    title:"sobolonの矛盾",
    text:"こんにちは！“可愛い”で地球を守る！マイクロプラスチックアクセサリー【sobolon】のリーダーひなこです！sobolonを知らない…",
  }
];

export function News() {
  return (
    <section id="news" className={`${utilStyles.section} ${utilStyles.inner} ${styles.news}`}>
      <h2 className={utilStyles.util_title}>News</h2>
      <div className={styles.list}>
        {NEWSITEMS.map(({src, alt, datetime, date, title, text}) => (
          <article className={styles.item} key={title}>
            <Link href="/">
              <a className={styles.item_link}>
                <div className={styles.item_header}>
                  <div className={styles.item_picture}>
                    <img src={src} alt={alt} />
                  </div>
                </div>
                <div className={styles.item_body}>
                  <p>
                    <time dateTime={datetime}>{date}</time>
                  </p>
                  <h3 className={styles.item_title}>{title}</h3>
                  <p className={styles.item_text}>{text}</p>
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
      <div className={styles.footer}>
        <Link href="/">
          <a className={utilStyles.util_link}>MORE</a>
        </Link>
      </div>
    </section>
  );
}
