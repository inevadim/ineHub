import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('shop')) || [],
  valueVisible: false,
  valueEdit: [],
  valueCrossOut: false,
};
export const shopSlice = createSlice({
  name: 'shop',
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
      localStorage.setItem('shop', JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(item => item.name !== action.payload);
      localStorage.setItem('shop', JSON.stringify(state.value));
    },
    editItem: (state, action) => {
      state.value = JSON.parse(localStorage.getItem('shop'));
      let index = state.value.findIndex(e => e.name === action.payload.valueEdit);
      console.log('index -', index);
      if (index > -1) {
        state.value[index].name = action.payload.itemNameChange;
        localStorage.setItem('shop', JSON.stringify(state.value));
      }
    },
    checkedItem: (state, action) => {
      state.value = JSON.parse(localStorage.getItem('shop'));
      console.log('UnChecked', action.payload);
      let index = state.value.findIndex(e => e.name === action.payload);
      // console.log('UnChecked', state.value[index].checked);
      if (index > -1) {
        state.value[index].checked = !state.value[index].checked;
        localStorage.setItem('shop', JSON.stringify(state.value));
        console.log('checked', state.value[index].checked);
      }
    },
    visibleShop: state => {
      state.valueVisible = !state.valueVisible;
    },
  },
});

export const { addItem, deleteItem, editItem, visibleShop, checkedItem } = shopSlice.actions;

export default shopSlice.reducer;
