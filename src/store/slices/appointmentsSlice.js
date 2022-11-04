import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import appointmentAPI from '../../ api/appointment';

export const bookAppointment = createAsyncThunk(
  'appointmentsSlice/bookAppointment',
  async (data) => {
    try {
      const { newAppointment, nextStep } = data;
      const result = await appointmentAPI.book(newAppointment);
      return {
        result: result.data.data,
        nextStep,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// Reducer
const appointmentsSlice = createSlice({
  name: 'appointmentsSlice',
  initialState: {
    appointments: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    // Book appointment
    [bookAppointment.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [bookAppointment.fulfilled]: (state, action) => {
      message.success('Sent appointment successfully!');
      action.payload.nextStep();
      state.isLoading = false;
      state.hasError = false;
    },
    [bookAppointment.rejected]: (state, action) => {
      message.error(
        `Sent appointment failed due to ${action.error.message}`,
        3
      );
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectAppointments = (state) => state.appointments.appointments;

export const selectAppointmentIsLoading = (state) =>
  state.appointments.isLoading;

export default appointmentsSlice.reducer;
