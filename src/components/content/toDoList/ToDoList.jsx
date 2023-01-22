import styles from './ToDoList.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import { addItem, deleteItem } from '../../../redux/toDoListSlice';
import { EntryField } from './components/EntryField';
import { useEffect } from 'react';

export const ToDoList = () => {
  //   useEffect(() => {
  //     return () => {
  //       listItems = localStorage.getItem('toDoList');
  //     };
  //   }, []);
  const listItems = useSelector(state => state.toDoList.value);
  //   const listItems = JSON.parse(localStorage.getItem('toDoList'));

  const dispatch = useDispatch();
  return (
    <div className={styles.toDoList}>
      <div className={styles.toDoListContent}>
        <div className={styles.name}>toDoList</div>
        <div className={styles.content}>
          <div>
            {listItems.map(item => {
              return (
                <div className={styles.item} key={item}>
                  {item}
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
