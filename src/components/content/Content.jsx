import styles from './Content.module.scss';
import { Shop } from './shop/Shop';
import { ToDoList } from './toDoList/ToDoList';

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapperContent}>
        {/* <ToDoList /> */}
        <Shop />
      </div>
    </div>
  );
};
