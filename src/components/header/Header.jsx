import styles from './Header.module.scss';
import { Menu } from './menu/Menu';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Menu />
    </div>
  );
};
