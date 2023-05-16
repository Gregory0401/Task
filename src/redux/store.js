import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filters/filtersSlice';

import tweetsReducer from './tweets/tweetsSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tweets: tweetsReducer,
  },
});
