import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('toDoList')) || [],
};
export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const arrayObj = {
        id: 54,
        name: action.payload,
        checked: true,
      };
      // const arrayObj = action.payload;
      state.value.push(arrayObj);
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    deleteItem: state => {
      state.value -= 1;
    },
  },
});

export const { addItem, deleteItem, incrementByAmount } = toDoListSlice.actions;

export default toDoListSlice.reducer;
