import styles from './CartShop.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleShop, deleteItem } from '../../../../../redux/shopSlice';
import { Checkout } from './Checkout';
import { useState } from 'react';

export const CartShop = () => {
  const listItems = useSelector(state => state.shop.value);
  const dispatch = useDispatch();

  const [checkoutState, setCheckoutState] = useState(false);
  const checkout = () => {
    if (listItems != '') {
      setCheckoutState(true);
      // setTimeout(() => {
      //   setCheckoutState(false);
      // }, 1000);
    } else {
    }
  };

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
              <div
                className={checkoutState ? styles.unWrapperItem : styles.wrapperItem}
                key={item.name}>
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
          {checkoutState ? <Checkout /> : ''}
          <div
            className={styles.checkout}
            onClick={() => {
              checkout();
            }}>
            Сheckout
          </div>
        </div>
      </div>
    </div>
  );
};
