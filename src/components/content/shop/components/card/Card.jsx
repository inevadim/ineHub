import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgItem}>img</div>
      <div className={styles.nameItem}>name</div>
      <div className={styles.priceItem}>price</div>
      <div className={styles.buyItem}>buy</div>
    </div>
  );
};
