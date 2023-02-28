import styles from './ToDoList.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, visibleEdit, checkedItem } from '../../../redux/toDoListSlice';

// import { addItem, deleteItem } from '../../../redux/toDoListSlice';
import { EntryField } from './components/entryField/EntryField';
// import { useState } from 'react';
import { EditItems } from './components/editItems/EditItems';
// import { useEffect } from 'react';

export const ToDoList = () => {
  //   useEffect(() => {
  //     listItems = localStorage.getItem('toDoList');
  //   }, []);
  const listItems = useSelector(state => state.toDoList.value);
  const itemsEdit = useSelector(state => state.toDoList.valueVisibleEdit);
  // const valueEdit = useSelector(state => state.toDoList.valueEdit);
  // const valueEdit = useSelector(state => state.toDoList.valueEdit);
  const dispatch = useDispatch();

  // const [itemEdit, setItemEdit] = useState(true);

  const editItems = nameItem => {
    // return dispatch(editItem());

    console.log('itemEdit - ', itemsEdit);

    return dispatch(visibleEdit(nameItem));
    // const listItem = listItems.find(item => item.name == nameItem);
    // console.log(listItem);
  };

  const checkedItems = name => {
    console.log('123123-', name);
    return dispatch(checkedItem(name));
  };

  const deleteItems = itemName => {
    return dispatch(deleteItem(itemName));
  };

  // const [checketItem, setChecketItem] = useState(false);
  // const handleChange = event => {
  //   // let listItem = listItems.find(item => item.name == { nameItem });
  //   // console.log(listItem);
  //   if (event.target.checked) {
  //     console.log('✅ Checkbox is checked');
  //   } else {
  //     console.log('⛔️ Checkbox is NOT checked');
  //   }
  // };

  //   const listItems = JSON.parse(localStorage.getItem('toDoList'));

  // const dispatch = useDispatch();
  return (
    <div className={styles.toDoList}>
      <div className={styles.toDoListContent}>
        <div className={styles.name}>toDoList</div>
        <div className={styles.content}>
          <div>
            {listItems.map(item => {
              return (
                <div className={styles.wrapperItem} key={item}>
                  <div
                    className={item.checked ? styles.item : styles.itemUnChecked}
                    onClick={() => checkedItems(item.name)}>
                    {item.name}
                  </div>
                  {/* <input
                    type="checkbox"
                    onChange={handleChange}
                    onClick={() => {
                      editItems(item.name);
                    }}
                  /> */}
                  <div className={styles.editItem} onClick={() => editItems(item.name)}>
                    ✏️
                  </div>
                  <div className={styles.deleteItem} onClick={() => deleteItems(item.name)}>
                    ⛔️
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <EntryField />
      </div>
      {itemsEdit ? <EditItems /> : ''}
    </div>
  );
};
