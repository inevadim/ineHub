import styles from './CartShop.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleShop } from '../../../../../redux/shopSlice';
export const CartShop = () => {
  const listItems = useSelector(state => state.shop.value);
  const dispatch = useDispatch();
  const visibleItem = () => {
    return dispatch(visibleShop());
  };
  return (
    <div className={styles.wrapper} onClick={() => visibleItem()}>
      <div
        className={styles.content}
        onClick={e => {
          e.stopPropagation();
        }}>
        {listItems.map(item => {
          return (
            <div className={styles.wrapperItem} key={item.name}>
              <div className={styles.imgItem}>
                <img src={item.imgUrl} />
                {/* <img src="assets/img/shop/nikeDunkHighUpWmns.png" /> */}
              </div>
              <div className={styles.wrapperPriceName}>
                <div className={styles.itemName}>name:{item.name}</div>
                <div className={styles.itemPrice}>price:{item.price}</div>
              </div>
              <div className={styles.deleteItem}>⛔️</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
