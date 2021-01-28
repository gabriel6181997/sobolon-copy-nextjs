import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/footer/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer-logo">
        <img src="/img/logo.png" alt="sobolon" />
      </div>
      <ul className="footer-nav-list">
        <li className="footer-nav-item">
          <a href="#" className="footer-nav-item-link">
            プライバシーポリシー
          </a>
        </li>
        <li className="footer-nav-item">
          <a href="#" className="footer-nav-item-link">
            特定商取引法に基づく表記
          </a>
        </li>
      </ul>
      <ul className="footer-sns-list">
        <li className="footer-sns-item">
          <a href="#" className="footer-sns-item-link" aria-label="Twitter">
          </a>
        </li>
        <li className="footer-sns-item">
          <a href="#" className="footer-sns-item-link" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="footer-sns-item">
          <a href="#" className="footer-sns-item-link" aria-label="Line">
            <i className="fab fa-line"></i>
          </a>
        </li>
      </ul>
      <p className="footer-copyright">
        <small lang="en">© 2020 sobolon All rights reserved</small>
      </p>
    </footer>
  );
}
