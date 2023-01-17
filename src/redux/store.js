import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import toDoListReducer from './toDoListSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDoList: toDoListReducer,
  },
});
