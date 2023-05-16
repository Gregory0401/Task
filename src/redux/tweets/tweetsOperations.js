import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsDataOver } from './tweetsSlice';

const BASE_URL = 'https://643aea3090cd4ba563051059.mockapi.io/api/users';
export const PER_PAGE = 9;

export const fetchTweets = createAsyncThunk(
  'tweets/fetchItems',
  async ({ page, filter }, { rejectWithValue, dispatch }) => {
    let filterParams = '';

    switch (filter) {
      case 'show all':
        filterParams = '';
        break;
      case 'follow':
        filterParams = 'isFollowing=false';
        break;
      case 'followings':
        filterParams = 'isFollowing=true';
        break;

      default:
        break;
    }

    try {
      const { data } = await axios.get(
        `${BASE_URL}?${filterParams}&page=${page}&limit=${PER_PAGE}`
      );

      if (data.length < PER_PAGE) {
        dispatch(setIsDataOver(true));
      }
      return data;
    } catch (error) {
      return rejectWithValue('Something went wrong, please try again later!');
    }
  }
);
