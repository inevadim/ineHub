import styles from './Content.module.scss';
import { ToDoList } from './toDoList/ToDoList';

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapperContent}>
        <ToDoList />
      </div>
    </div>
  );
};
