import styles from './Content.module.scss';
import { Shop } from './shop/Shop';
import { ToDoList } from './toDoList/ToDoList';
import { Routes, Route, Link } from 'react-router-dom';
import { GameClicker } from './gameClicker/GameClicker';
import { Colloquy } from './colloquy/Colloquy';

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapperContent}>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/clicker" element={<GameClicker />} />
          <Route path="/colloquy" element={<Colloquy />} />
        </Routes>
        {/* <ToDoList /> */}
      </div>
    </div>
  );
};
