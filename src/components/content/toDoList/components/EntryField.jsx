import styles from './EntryField.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../redux/toDoListSlice';
export const EntryField = () => {
  const [entryFieldValue, setEntryFieldValue] = useState('');
  const listItems = useSelector(state => state.toDoList.value);
  const dispatch = useDispatch();
  const addItems = () => {
    setEntryFieldValue('');
    return dispatch(addItem(entryFieldValue));
  };
  return (
    <div className={styles.entryField}>
      <input
        className={styles.inputEntryField}
        onChange={e => {
          setEntryFieldValue(e.target.value);
        }}
        value={entryFieldValue}
        placeholder="Write text..."
      />
      <div
        className={styles.buttonEntryField}
        onClick={() => {
          addItems();
        }}>
        Enter
      </div>
      {/* <div
        className={styles.buttonEntryField}
        onClick={() => {
          console.log(listItems);
        }}>
        qweqwe
      </div> */}
    </div>
  );
};
