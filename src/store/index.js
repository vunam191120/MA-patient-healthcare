import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';

export default configureStore({
  reducer: {
    users: usersSlice,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
