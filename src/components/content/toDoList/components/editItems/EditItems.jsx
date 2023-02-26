import styles from './EditItems.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleEdit } from '../../../../../redux/toDoListSlice';

export const EditItems = () => {
  const dispatch = useDispatch();
  const valueEdit = useSelector(state => state.toDoList.valueEdit);
  const editItems = () => {
    // return dispatch(editItem());

    // console.log('itemEdit - ', itemsEdit);
    return dispatch(visibleEdit());
    // const listItem = listItems.find(item => item.name == nameItem);
    // console.log(listItem);
  };

  return (
    <div className={styles.wrapper} onClick={() => editItems()}>
      <div
        className={styles.editItem}
        onClick={e => {
          e.stopPropagation();
        }}>
        <center>
          <div>EDIT ITEM</div>
        </center>
        <div onClick={() => console.log({ valueEdit })}>
          Name - {valueEdit} <input placeholder={valueEdit} />
        </div>
      </div>
    </div>
  );
};
