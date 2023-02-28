import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('toDoList')) || [],
  valueVisibleEdit: false,
  valueEdit: [],
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
      state.value = state.value.filter(item => item.name !== action.payload);
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    editItem: (state, action) => {
      // const i = state.value.filter(item => item.name == action.payload);
      state.value = JSON.parse(localStorage.getItem('toDoList'));
      console.log('action.payload - ', action.payload.valueEdit);
      console.log('state.value', state.value);
      console.log('parse -', JSON.parse(localStorage.getItem('toDoList')));
      state.value = JSON.parse(localStorage.getItem('toDoList'));
      let index = state.value.findIndex(e => e.name === action.payload.valueEdit);
      console.log('index -', index);
      if (index > -1) {
        // state.value[index].name = action.payload;
        state.value[index].name = action.payload.itemNameChange;
        localStorage.setItem('toDoList', JSON.stringify(state.value));
      }
      // console.log('qweqwewqewqe -', i);
    },
    visibleEdit: (state, action) => {
      state.valueEdit = action.payload;
      state.valueVisibleEdit = !state.valueVisibleEdit;
    },
  },
});

export const { addItem, deleteItem, editItem, visibleEdit } = toDoListSlice.actions;

export default toDoListSlice.reducer;
