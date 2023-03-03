import styles from './Card.module.scss';

export const Card = ({ id, name, price, imgUrl }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgItem}>
        <img src={imgUrl} />
        {/* <img src="assets/img/shop/nikeDunkHighUpWmns.png" /> */}
      </div>
      <div className={styles.nameItem}>{name}</div>
      <div className={styles.priceItem}>{price} byn</div>
      <div className={styles.buyItem}>ADD</div>
    </div>
  );
};
