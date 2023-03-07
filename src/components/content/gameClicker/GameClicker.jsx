import { useState } from 'react';
import styles from './GameClicker.module.scss';

export const GameClicker = () => {
  const [count, setCount] = useState(0);
  const [plusCount, setPlusCount] = useState(1);
  const [lvlUp, setLvlUp] = useState(10);
  const plusCountItem = () => {
    setCount(count + plusCount);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.countGame}>count: {count}</div>
        <div
          className={styles.plusCount}
          onClick={() => {
            plusCountItem();
          }}>
          + count
        </div>
        <div className={styles.lvlUp}>lvlUp: 10</div>
      </div>
    </div>
  );
};
