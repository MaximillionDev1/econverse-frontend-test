import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h2>Venha conhecer nossas promoções</h2>
        <p>
          <span className={styles.highlight}>50% Off</span> nos produto
        </p>
        <button className={styles.ctaButton}>Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;
