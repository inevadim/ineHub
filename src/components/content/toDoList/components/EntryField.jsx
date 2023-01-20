import styles from './EntryField.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../../../redux/toDoListSlice';
export const EntryField = () => {
  const [entryFieldValue, setEntryFieldValue] = useState('1');
  const listItems = useSelector(state => state.toDoList.value);
  const dispatch = useDispatch();
  const clickConsole = () => {
    return console.log({ listItems });
  };
  return (
    <div className={styles.entryField}>
      <input
        className={styles.inputEntryField}
        onChange={e => {
          setEntryFieldValue(e.target.value);
        }}
      />
      <div
        className={styles.buttonEntryField}
        onClick={() => {
          clickConsole();
        }}>
        Enter - {entryFieldValue}
      </div>
    </div>
  );
};
