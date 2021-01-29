import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/contact/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

const ContactGoogleForm = {
  action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfiL42i6OxLVJb8vaDM5dNqdUa699CEpbMKsSqArbSinup7_Q/formResponse",
  name:"entry.1085531044",
  email:"entry.647609485",
  companyorindividual:"entry.645145015",
  content:"entry.1262385918",
  privacy:"entry.1942533298",
};

const options = ['法人','個人'];

export function Contact() {
  const { register , handleSubmit} = useForm({
    mode:'onChange',
  });

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={`${utilStyles.util_title} ${styles.section_title}`}>
        Contact
      </h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.text}>
          <span className={styles.text_inline}>＊</span>は入力必須項目です
        </p>
        <dl className={styles.list}>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              お名前<span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <input type={'text'} name={'name'} ref={register ({required: true})} />
            </dd>
          </div>
          <div className={styles.item}>
            <dt className={styles.item_title}>
              メールアドレス<span className={styles.item_title_inline}>＊</span>
            </dt>
            <dd className={styles.item_input}>
              <input type={'email'} name={'email'} ref={register ({required: true})} />
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
              <textarea name={'content'} ref={register ({required: true})}></textarea>
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
                value={'プライバシーポリシーの同意'}
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

const onSubmit = (values) => {
  console.log(values)
  const GOOGLE_FORM_ACTION = ContactGoogleForm.action;
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  //PostのParam生成
  const submitParams = new FormData();
  submitParams.append(ContactGoogleForm.name, values.name);
  submitParams.append(ContactGoogleForm.email, values.email);
  submitParams.append(ContactGoogleForm.companyorindividual, values.companyorindividual);
  submitParams.append(ContactGoogleForm.content, values.content);
  submitParams.append(ContactGoogleForm.privacy, values.privacy);

  //実行
  axios
   .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
   .then(() => {
     console.log('Success')
   })
   .catch((error) => {
     console.log('error')
   })
};

