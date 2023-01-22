import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: [{ id: '7', name: '23', checked: true }],
// };
const initialState = {
  value: ['7', '23'],
};

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
      //   state.value.push({ wid: '7', wname: action.payload, wchecked: true });
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    deleteItem: state => {
      state.value -= 1;
    },
  },
});

export const { addItem, deleteItem, incrementByAmount } = toDoListSlice.actions;

export default toDoListSlice.reducer;
