import { useEffect } from 'react';
import { useState } from 'react';
import styles from './GameClicker.module.scss';

export const GameClicker = () => {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);
  const [plusCount, setPlusCount] = useState(1);
  const [lvlUp, setLvlUp] = useState(10);
  const [autoLvlUp, setAutoLvlUp] = useState(0);
  const plusCountItem = () => {
    setCount(count + plusCount);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + autoCount);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, autoCount]);
  const autoLvlUpItem = () => {
    setAutoCount(autoCount + 1);
  };
  const lvlUpItem = () => {
    if (count >= lvlUp) {
      setPlusCount(plusCount + 1);
      setCount(count - lvlUp);
      setLvlUp(lvlUp * 2);
    } else {
      alert('dont have money');
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.countGame}>count: {count}</div>
        <div className={styles.countGame}>auto count: {autoCount}</div>
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

        <div
          className={styles.autoLvlUp}
          onClick={() => {
            autoLvlUpItem();
          }}>
          autoUp: {autoLvlUp}
        </div>
      </div>
    </div>
  );
};
