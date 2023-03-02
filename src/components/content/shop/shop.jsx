import { Card } from './components/card/Card';
import styles from './Shop.module.scss';

export const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopContent}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
