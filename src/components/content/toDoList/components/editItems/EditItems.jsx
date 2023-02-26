import styles from './EditItems.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleEdit } from '../../../../../redux/toDoListSlice';

export const EditItems = () => {
  const dispatch = useDispatch();
  const editItems = () => {
    // return dispatch(editItem());

    // console.log('itemEdit - ', itemsEdit);
    return dispatch(visibleEdit());
    // const listItem = listItems.find(item => item.name == nameItem);
    // console.log(listItem);
  };

  return (
    <div className={styles.wrapper} onClick={() => editItems()}>
      <div className={styles.editItem}>editItem</div>
    </div>
  );
};
