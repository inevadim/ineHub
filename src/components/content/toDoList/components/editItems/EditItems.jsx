import styles from './EditItems.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { visibleEdit, editItem } from '../../../../../redux/toDoListSlice';
import { useState } from 'react';

export const EditItems = () => {
  const dispatch = useDispatch();
  const valueEdit = useSelector(state => state.toDoList.valueEdit);
  const [itemNameChange, setItemNameChange] = useState('');
  const editItems = () => {
    // return dispatch(editItem());

    // console.log('itemEdit - ', itemsEdit);
    return dispatch(visibleEdit());
    // const listItem = listItems.find(item => item.name == nameItem);
    // console.log(listItem);
  };

  const saveItem = () => {
    const payloadItem = {
      valueEdit,
      itemNameChange,
    };
    return dispatch(editItem(payloadItem));
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
        <div onClick={() => console.log({ itemNameChange })}>
          Name - {valueEdit}{' '}
          <input
            defaultValue={valueEdit}
            onChange={e => {
              setItemNameChange(e.target.value);
            }}
          />
        </div>
        <div onClick={() => saveItem()}>SAVE</div>
      </div>
    </div>
  );
};
