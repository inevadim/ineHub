import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../../redux/shopSlice';
export const Card = ({ id, name, price, imgUrl }) => {
  const dispatch = useDispatch();
  const addItems = name => {
    console.log(name.name);

    const objItem = {
      name: name.name,
      price,
      imgUrl,
    };
    return dispatch(addItem(objItem));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <div className={styles.imgItem}>
          <img src={imgUrl} />
          {/* <img src="assets/img/shop/nikeDunkHighUpWmns.png" /> */}
        </div>
        <div className={styles.nameItem}>{name}</div>
      </div>
      <div>
        <div className={styles.priceItem}>{price} byn</div>
        <div className={styles.buyItem} onClick={() => addItems({ name })}>
          ADD
        </div>
      </div>
    </div>
  );
};
