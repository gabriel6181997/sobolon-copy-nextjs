import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/header/index.module.scss";

export function Header() {
  return(
    <header className="header">
    <div className="header-inner inner">
      <h1 className="header-logo"><img src="/img/logo.png" alt="sobolon" /></h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link href="#concept">
              <a className="header-nav-item-link">Concept</a>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link href="#feature">
              <a className="header-nav-item-link">Feature</a>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link href="#products">
              <a className="header-nav-item-link">Products</a>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link href="#news">
              <a className="header-nav-item-link">News</a>
            </Link>
          </li>
          <li className="header-nav-item">
            <Link href="#contact">
              <a className="header-nav-item-link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}


