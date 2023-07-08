import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({

  name: 'filter',

  initialState: '',

  reducers: {

    updFilter(state, action) {
      return action.payload;
    }
  }
})

export const filterReducer = filterSlice.reducer;

export const { updFilter } = filterSlice.actions;

export const getFilterVal = state => state.filter;