import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appointmentsSlice from './slices/appointmentsSlice';
import clinicsSlice from './slices/clinicsSlice';
import usersSlice from './slices/usersSlice';
import supportsSlice from './slices/supportsSlice';
import articlesSlice from './slices/articlesSlice';
import paymentsSlice from './slices/paymentsSlice';
import medicalRecordsSclie from './slices/medicalRecordsSclie';

export default configureStore({
  reducer: {
    users: usersSlice,
    clinics: clinicsSlice,
    appointments: appointmentsSlice,
    supports: supportsSlice,
    articles: articlesSlice,
    payments: paymentsSlice,
    medicalRecords: medicalRecordsSclie,
  },
  middleware: () =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
