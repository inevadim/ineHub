import { useState } from 'react';
import styles from './GameClicker.module.scss';

export const GameClicker = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.countGame}>{count}</div>
        <div
          className={styles.plusCount}
          onClick={() => {
            plusCount();
          }}>
          + count
        </div>
      </div>
    </div>
  );
};
