import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "src/components/products/index.module.scss";
import utilStyles from "src/styles/utils.module.scss";

const PRODUCTs = [
  {
    src: "/img/product-1.png",
    alt: "product-1",
    title:"【しかくイヤリング】海洋マイクロプラスチックを使ったハンドメイドイヤリング(全7色)",
    cost: "￥3,695",
  },
  {
    src:"/img/product-2.png",
    alt:"product-2",
    title:"【しかく指輪】海洋マイクロプラスチックを使ったハンドメイドアクセサリー/ゆびわ(全7色)",
    cost:"￥2,390",
  },
  {
    src:"/img/product-3.png",
    alt:"product-3",
    title:"【ピンバッジ】海洋マイクロプラスチックを使ったsobolonオリジナルピンバッジ(全6色)",
    cost:"￥2,580",
  }
]

export function Products() {
  return (
    <section id="products" className={`${styles.products} ${utilStyles.section} ${utilStyles.inner}`}>
      <h2 className={utilStyles.util_title}>Products</h2>
      <ul className={styles.list}>
        <li className="products-item">
          <a href="#" className="products-item-link">
            <div className="products-item-picture">
              <img src="/img/product-1.png" alt="" />
            </div>
            <div className="products-item-body">
              <p className="products-item-title">
                【しかくイヤリング】海洋マイクロプラスチックを使ったハンドメイドイヤリング(全7色)
              </p>
              <p className="products-item-cost">￥3,695</p>
            </div>
          </a>
        </li>
        <li className="products-item">
          <a href="#" className="products-item-link">
            <div className="products-item-picture">
              <img src="/img/product-2.png" alt="" />
            </div>
            <div className="products-item-body">
              <p className="products-item-title">
                【しかく指輪】海洋マイクロプラスチックを使ったハンドメイドアクセサリー/ゆびわ(全7色)
              </p>
              <p className="products-item-cost">￥2,390</p>
            </div>
          </a>
        </li>
        <li className="products-item">
          <a href="#" className="products-item-link">
            <div className="products-item-picture">
              <img src="/img/product-3.png" alt="" />
            </div>
            <div className="products-item-body">
              <p className="products-item-title">
                【ピンバッジ】海洋マイクロプラスチックを使ったsobolonオリジナルピンバッジ(全6色)
              </p>
              <p className="products-item-cost">￥2,580</p>
            </div>
          </a>
        </li>
      </ul>
      <div className={styles.footer}>
        <Link href="/">
          <a className={utilStyles.util_link}>More</a>
        </Link>
      </div>
    </section>
  );
}
