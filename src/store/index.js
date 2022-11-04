import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appointmentsSlice from './slices/appointmentsSlice';
import clinicsSlice from './slices/clinicsSlice';
import usersSlice from './slices/usersSlice';
import supportsSlice from './slices/supportsSlice';

export default configureStore({
  reducer: {
    users: usersSlice,
    clinics: clinicsSlice,
    appointments: appointmentsSlice,
    supports: supportsSlice,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
