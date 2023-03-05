import styles from './CartShop.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleShop, deleteItem } from '../../../../../redux/shopSlice';

export const CartShop = () => {
  const listItems = useSelector(state => state.shop.value);
  const dispatch = useDispatch();
  const deleteItems = itemName => {
    return dispatch(deleteItem(itemName));
  };
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
        <div>
          {listItems.map(item => {
            return (
              <div className={styles.wrapperItem} key={item.name}>
                <div className={styles.imgItem}>
                  <img src={item.imgUrl} />
                  {/* <img src="assets/img/shop/nikeDunkHighUpWmns.png" /> */}
                </div>
                <div className={styles.wrapperPriceName}>
                  <div className={styles.itemName}>name: {item.name}</div>
                  <div className={styles.itemPrice}>price: {item.price} BYN</div>
                </div>
                <div className={styles.deleteItem} onClick={() => deleteItems(item.name)}>
                  ⛔️
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.wrapperCheckout}>
          <div className={styles.allPrice}>
            ALL PRICE :{' '}
            {listItems
              .map(item => {
                return item.price;
              })
              .reduce((sum, current) => sum + current, 0)}{' '}
            BYN
          </div>
          <div className={styles.checkout}>Сheckout</div>
        </div>
      </div>
    </div>
  );
};
