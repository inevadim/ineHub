import styles from './ToDoList.module.scss';

export const ToDoList = () => {
  return (
    <div className={styles.toDoList}>
      <div className={styles.toDoListContent}>
        <div className={styles.name}>toDoList</div>
        <div className={styles.content}>content</div>
      </div>
    </div>
  );
};
