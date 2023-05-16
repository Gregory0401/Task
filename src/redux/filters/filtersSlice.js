import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'show all',
  page: 1,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
      state.page = 1;
    },
    incrementPage: state => {
      state.page += 1;
    },
  },
});

export const { setFilter, incrementPage } = filtersSlice.actions;

export default filtersSlice.reducer;
