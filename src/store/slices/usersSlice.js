import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {},
});

// Actions

// Selectors

export default usersSlice.reducer;
