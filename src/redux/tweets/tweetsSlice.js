import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './tweetsOperations';

const initialState = {
  items: [],

  isLoading: false,
  error: null,
  isDataOver: false,
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    resetTweets: state => {
      state.items = [];
      state.isDataOver = false;
    },
    setIsDataOver: (state, { payload }) => {
      state.isDataOver = payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchTweets.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    addCase(fetchTweets.fulfilled, (state, { payload }) => {
      state.items = [...state.items, ...payload];
      state.isLoading = false;
      state.error = null;
    });
    addCase(fetchTweets.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { resetTweets, setIsDataOver } = tweetsSlice.actions;

export default tweetsSlice.reducer;
