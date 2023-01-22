import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ['1', '23', '333'],
};

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    deleteItem: state => {
      state.value -= 1;
    },
  },
});

export const { addItem, deleteItem, incrementByAmount } = toDoListSlice.actions;

export default toDoListSlice.reducer;
