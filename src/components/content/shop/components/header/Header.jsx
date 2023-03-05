import styles from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { visibleShop } from '../../../../../redux/shopSlice';
export const Header = () => {
  const dispatch = useDispatch();
  const visibleItem = () => {
    return dispatch(visibleShop());
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <div className={styles.name}>Shop Sneakers</div>
        <img src="/assets/img/shop/header/sneakers.png" />
      </div>

      <div
        className={styles.shoppingCart}
        onClick={() => {
          visibleItem();
        }}>
        <img src="/assets/img/shop/header/carts.png" />
      </div>
    </div>
  );
};
