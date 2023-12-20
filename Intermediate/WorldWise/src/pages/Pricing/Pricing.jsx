import PageNav from "../../components/PageNav";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.container}>
      <PageNav />
      <main className={styles.pricingBox}>
        <section className={styles.pricing}>
          <div className={styles.pricingCaption}>
            <h2>
              Simple pricing. <br />
              Just $9/month
            </h2>
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
            </p>
          </div>
          <div className={styles.pricingImage}>
            <img src="/img-2.jpg" alt="Pricing" />
          </div>
        </section>
      </main>
    </div>
  );
}
