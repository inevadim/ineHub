import styles from './ToDoList.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/counterSlice';
import { addItem, deleteItem } from '../../../redux/toDoListSlice';
export const ToDoList = () => {
  const count = useSelector(state => state.counter.value);
  const listItems = useSelector(state => state.toDoList.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.toDoList}>
      <div className={styles.toDoListContent}>
        <div className={styles.name}>toDoList</div>
        <div className={styles.content}>
          <div>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>
              Increment
            </button>
            <span>{count}</span>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
              Decrement
            </button>
          </div>

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
      </div>
    </div>
  );
};
