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
        checked: false,
      };
      // const arrayObj = action.payload;
      state.value.push(arrayObj);
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(item => item.name != action.payload);
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    editItem: (state, action) => {
      console.log('qweqwewqewqe');
      // let user = users.find(item => item.id == 1);
      // let user = state.value.find(item => item.id == 1);
    },
  },
});

export const { addItem, deleteItem, editItem } = toDoListSlice.actions;

export default toDoListSlice.reducer;
