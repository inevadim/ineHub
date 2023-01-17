import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [1, 23, 333],
};

export const toDoListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: state => {
      state.value += 1;
    },
    deleteItem: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addItem, deleteItem, incrementByAmount } = toDoListSlice.actions;

export default toDoListSlice.reducer;
