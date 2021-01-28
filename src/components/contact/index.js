import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/contact/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={`${utilStyles.util_title} ${styles.section_title}`}>
        Contact
      </h2>
      <form className={styles.form}>
        <p className={styles.text}>
          <span className={styles.text_inline}>＊</span>は入力必須項目です
        </p>
        <dl className={styles.list}>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              お名前<span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <input type="text" required />
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              メールアドレス<span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <input type="email" name="emailAddress" required />
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              法人/個人の選択
              <span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <div className={styles.radio_wrap}>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    className={styles.radio_input}
                    value="法人"
                    required
                    checked
                  />
                  <span className={styles.radio_part}>法人</span>
                </label>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    className={styles.radio_input}
                    value="個人"
                    required
                  />
                  <span className={styles.radio_part}>個人</span>
                </label>
              </div>
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              お問い合わせ内容
              <span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <textarea required></textarea>
            </dd>
          </div>
        </dl>
        <div className={styles.footer}>
          <p className={styles.footer_text}>
            <label className={styles.privacy}>
              <input
                type="checkbox"
                required
                className={styles.privacy_input}
              />
              <span className={styles.privacy_part}></span>
            </label>
            <Link href="/">
              <a
                className={styles.privacy_link}
                target="_blank"
                value="プライバシーポリシーの同意"
              >
                プライバシーポリシー
              </a>
            </Link>
            に同意します。
          </p>
          <div className={styles.footer_submit}>
            <button
              id="js-submit"
              className={utilStyles.util_link}
              type="submit"
              disabled
            >
              送信
            </button>
          </div>
        </div>
      </form>
      {/* <div id="js-success" className="contact-message">
        <p>送信完了しました。ありがとうございました。</p>
      </div>
      <div id="js-error" className="contact-message -error">
        <p>送信に失敗しました。ページを更新して再度送信してください。</p>
      </div> */}
    </section>
  );
}
