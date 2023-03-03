import styles from './Content.module.scss';
import { Shop } from './shop/Shop';
import { ToDoList } from './toDoList/ToDoList';
import { Routes, Route, Link } from 'react-router-dom';

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapperContent}>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        {/* <ToDoList /> */}
      </div>
    </div>
  );
};
