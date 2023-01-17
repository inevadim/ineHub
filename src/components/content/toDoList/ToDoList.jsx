import styles from './ToDoList.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/counterSlice';
export const ToDoList = () => {
  const count = useSelector(state => state.counter.value);
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
        </div>
      </div>
    </div>
  );
};
