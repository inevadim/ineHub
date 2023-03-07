import { useEffect } from 'react';
import { useState } from 'react';
import styles from './GameClicker.module.scss';

export const GameClicker = () => {
  const [money, setMoney] = useState(0);
  const [autoMoney, setAutoMoney] = useState(0);
  const [plusMoney, setPlusMoney] = useState(1);
  const [lvlUp, setLvlUp] = useState(10);
  const [autoLvlUp, setAutoLvlUp] = useState(10);

  const [wood, setWood] = useState(0);
  const [autoWood, setAutoWood] = useState(0);
  const [plusWood, setPlusWood] = useState(1);
  const [lvlUpWood, setLvlUpWood] = useState(10);
  const [autoLvlUpWood, setAutoLvlUpWood] = useState(10);

  const [food, setFood] = useState(0);
  const [autoFood, setAutoFood] = useState(0);
  const [plusFood, setPlusFood] = useState(1);
  const [lvlUpFood, setLvlUpFood] = useState(10);
  const [autoLvlUpFood, setAutoLvlUpFood] = useState(10);

  const plusMoneyItem = () => {
    setMoney(money + plusMoney);
  };
  const plusWoodItem = () => {
    setWood(wood + plusWood);
  };
  const plusFoodItem = () => {
    setFood(food + plusFood);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoney(money + autoMoney);
      setWood(wood + autoWood);
      setFood(food + autoFood);
    }, 1000);

    return () => clearTimeout(timer);
  }, [money, autoMoney, wood, autoWood, food, autoFood]);

  const autoLvlUpItem = () => {
    if (autoLvlUp > money) {
      console.log('No have money');
    } else {
      setAutoMoney(autoMoney + 1);
      setMoney(money - autoLvlUp);
      setAutoLvlUp(autoLvlUp * 2);
    }
  };
  const autoLvlUpItemWood = () => {
    if (autoLvlUpWood > wood) {
      console.log('No have wood');
    } else {
      setAutoWood(autoWood + 1);
      setWood(wood - autoLvlUpWood);
      setAutoLvlUpWood(autoLvlUpWood * 2);
    }
  };
  const autoLvlUpItemFood = () => {
    if (autoLvlUpFood > food) {
      console.log('No have food');
    } else {
      setAutoFood(autoFood + 1);
      setFood(food - autoLvlUpFood);
      setAutoLvlUpFood(autoLvlUpFood * 2);
    }
  };
  const lvlUpItem = () => {
    if (money >= lvlUp) {
      setPlusMoney(plusMoney + 1);
      setMoney(money - lvlUp);
      setLvlUp(lvlUp * 2);
    } else {
      alert('dont have money');
    }
  };

  const lvlUpItemWood = () => {
    if (wood >= lvlUpWood) {
      setPlusWood(plusWood + 1);
      setWood(wood - lvlUpWood);
      setLvlUpWood(lvlUpWood * 2);
    } else {
      alert('dont have wood');
    }
  };

  const lvlUpItemFood = () => {
    if (food >= lvlUpFood) {
      setPlusFood(plusFood + 1);
      setFood(food - lvlUpFood);
      setLvlUpFood(lvlUpFood * 2);
    } else {
      alert('dont have food');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.wrapperItem}>
          <div className={styles.moneyGame}>money: {money}</div>
          <div className={styles.moneyGame}>auto money: {autoMoney}</div>
          <div
            className={styles.plusMoney}
            onClick={() => {
              plusMoneyItem();
            }}>
            + {plusMoney}
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
        {/* ................................ */}
        <div className={styles.wrapperItem}>
          <div className={styles.moneyGame}>wood: {wood}</div>
          <div className={styles.moneyGame}>auto wood: {autoWood}</div>
          <div
            className={styles.plusMoney}
            onClick={() => {
              plusWoodItem();
            }}>
            + {plusWood}
          </div>
          <div
            className={styles.lvlUp}
            onClick={() => {
              lvlUpItemWood();
            }}>
            lvlUp: {lvlUpWood}
          </div>

          <div
            className={styles.autoLvlUp}
            onClick={() => {
              autoLvlUpItemWood();
            }}>
            autoUp: {autoLvlUpWood}
          </div>
        </div>
        {/* ................................ */}
        <div className={styles.wrapperItem}>
          <div className={styles.moneyGame}>food: {food}</div>
          <div className={styles.moneyGame}>auto food: {autoFood}</div>
          <div
            className={styles.plusMoney}
            onClick={() => {
              plusFoodItem();
            }}>
            + {plusFood}
          </div>
          <div
            className={styles.lvlUp}
            onClick={() => {
              lvlUpItemFood();
            }}>
            lvlUp: {lvlUpFood}
          </div>

          <div
            className={styles.autoLvlUp}
            onClick={() => {
              autoLvlUpItemFood();
            }}>
            autoUp: {autoLvlUpFood}
          </div>
        </div>
      </div>
    </div>
  );
};
