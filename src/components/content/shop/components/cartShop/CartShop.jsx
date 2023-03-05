import styles from './CartShop.module.scss';
import { useDispatch } from 'react-redux';
import { visibleShop } from '../../../../../redux/shopSlice';
export const CartShop = () => {
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
        }}></div>
    </div>
  );
};
