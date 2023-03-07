import { useState } from 'react';
import styles from './GameClicker.module.scss';

export const GameClicker = () => {
  const [count, setCount] = useState(0);
  const [plusCount, setPlusCount] = useState(1);
  const [lvlUp, setLvlUp] = useState(10);
  const plusCountItem = () => {
    setCount(count + plusCount);
  };
  const lvlUpItem = () => {
    setPlusCount(plusCount + 1);
    setCount(count - lvlUp);
    setLvlUp(lvlUp * 2);
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
          + {plusCount} count
        </div>
        <div
          className={styles.lvlUp}
          onClick={() => {
            lvlUpItem();
          }}>
          lvlUp: {lvlUp}
        </div>
      </div>
    </div>
  );
};
