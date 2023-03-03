import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from './components/card/Card';
import { Header } from './components/header/Header';
import styles from './Shop.module.scss';

export const Shop = () => {
  const [mas, setMas] = useState([]);

  useEffect(() => {
    axios.get('/bdShop.json').then(({ data }) => {
      setMas(data.shop_item);
    });
  }, [setMas]);
  return (
    <div className={styles.shop}>
      <Header />
      {/* <div className={styles.shopContentWrapper}> */}
      <div className={styles.shopContent}>
        {mas.map(item => {
          return (
            <div key={item.id}>
              <Card id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} />
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};