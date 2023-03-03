import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <div className={styles.name}>Shop Sneakers</div>
        <img src="/assets/img/shop/header/sneakers.png" />
      </div>

      <div className={styles.shoppingCart}>
        <img src="/assets/img/shop/header/carts.png" />
      </div>
    </div>
  );
};
