import styles from './EntryField.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../../redux/toDoListSlice';
export const EntryField = () => {
  const [entryFieldValue, setEntryFieldValue] = useState('1');
  //   const listItems = useSelector(state => state.toDoList.value);
  const dispatch = useDispatch();
  const clickConsole = () => {
    return dispatch(addItem(entryFieldValue));
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
          console.log('5', entryFieldValue);
        }}>
        Enter - {entryFieldValue}
      </div>
    </div>
  );
};
