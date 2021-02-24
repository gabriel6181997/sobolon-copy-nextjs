import React from 'react';
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/contact/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";
import {formdataRef} from "src/firebase";

const options = ['法人','個人'];

type FormData = {
  name: string;
  email:string;
  companyorindividual:string;
  content:string;
  privacy:unknown;
}

export function Contact():JSX.Element {
  const { register , handleSubmit} = useForm({
    mode:'onChange',
  });

  const onSubmit = (values:FormData) => {
    console.log(values);
    formdataRef.push(values);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={`${utilStyles.util_title} ${styles.section_title} ${"wow fadeInUp"}`}>
        Contact
      </h2>
      <form className={`${styles.form} ${"wow fadeInUp"}`} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.text}>
          <span className={styles.text_inline}>＊</span>は入力必須項目です
        </p>
        <dl className={styles.list}>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              お名前<span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <input type={'text'} name={'name'}
              ref={register ({required: true})}

              />
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              メールアドレス<span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <input type={'email'} name={'email'}
              ref={register ({required: true})}
              />
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              法人/個人の選択
              <span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <div className={styles.radio_wrap}>
                {options.map((option) => (
                  <label className={styles.radio} key={option}>
                    <input
                    type={'radio'}
                    name={'companyorindividual'}
                    className={styles.radio_input}
                    value={option}
                    ref={register ({required: true})}
                    />
                   <span className={styles.radio_part}>{option}</span>
                  </label>
                ))}
              </div>
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              お問い合わせ内容
              <span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <textarea name={'content'}
              ref={register ({required: true})}
              ></textarea>
            </dd>
          </div>
        </dl>
        <div className={styles.footer}>
          <p className={styles.footer_text}>
            <label className={styles.privacy}>
              <input
                type={'checkbox'}
                name={'privacy'}
                className={styles.privacy_input}
                ref={register ({required: true})}
              />
              <span className={styles.privacy_part}></span>
            </label>
            <Link href="/">
              <a
                className={styles.privacy_link}
              >
                プライバシーポリシー
              </a>
            </Link>
            に同意します。
          </p>

          <div className={styles.footer_submit}>
            <button
              className={utilStyles.util_link}
              type={'submit'}
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

