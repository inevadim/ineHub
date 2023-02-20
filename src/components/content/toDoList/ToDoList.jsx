import styles from './ToDoList.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { editItem } from '../../../redux/toDoListSlice';

// import { addItem, deleteItem } from '../../../redux/toDoListSlice';
import { EntryField } from './components/EntryField';
import { useState } from 'react';
// import { useEffect } from 'react';

export const ToDoList = () => {
  //   useEffect(() => {
  //     listItems = localStorage.getItem('toDoList');
  //   }, []);
  const listItems = useSelector(state => state.toDoList.value);
  const dispatch = useDispatch();
  const editItems = nameItem => {
    // return dispatch(editItem());
    console.log('nameItem - ', nameItem);
    const listItem = listItems.find(item => item.name == nameItem);
    console.log(listItem);
  };

  const [checketItem, setChecketItem] = useState(false);
  const handleChange = event => {
    // let listItem = listItems.find(item => item.name == { nameItem });
    // console.log(listItem);
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
  };

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
                <div className={item.checked ? styles.item : styles.itemUnChecked} key={item}>
                  {item.name}
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    onClick={() => {
                      editItems(item.name);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <EntryField />
      </div>
    </div>
  );
};
