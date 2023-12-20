import PageNav from "../../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <div className={styles.container}>
      <PageNav />
      <main className={styles.productBox}>
        <section className={styles.product}>
          <div className={styles.productImage}>
            <img src="/img-1.jpg" alt="Pricing" />
          </div>
          <div className={styles.productCaption}>
            <h2>About WorldWide.</h2>
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
            </p>
            <p>
              It was popularised and more recently with desktop publishing
              software in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software emaining essentially unchanged. It was
              popularised in the 1960s with the release
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
