import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgItem}>
        <img src="assets/img/shop/jordanOneParis.png" />
        {/* <img src="assets/img/shop/nikeDunkHighUpWmns.png" /> */}
      </div>
      <div className={styles.nameItem}>Jordan One Paris</div>
      <div className={styles.priceItem}>165 byn</div>
      <div className={styles.buyItem}>buy</div>
    </div>
  );
};
