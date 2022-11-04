import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import userAPI from '../../ api/user';

const sendSupport = createAsyncThunk('usersSlice/sendSupport', async () => {
  try {
    const result = await userAPI.sendSupport();
    return result.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    users: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    // Fetch Articles
    [sendSupport.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [sendSupport.fulfilled]: (state, action) => {
      message.success('Sended support message successfully!', 3000);
      state.isLoading = false;
      state.hasError = false;
    },
    [sendSupport.rejected]: (state, action) => {
      message.err(action.error.message, 3);
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

// Actions

// Selectors

export default usersSlice.reducer;
