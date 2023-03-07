import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>Home</li>
        <Link to="/">
          <li>To do list</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/clicker">
          <li>Clicker</li>
        </Link>
        <li>5</li>
      </ul>
    </div>
  );
};
