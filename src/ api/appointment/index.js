import axiosClient from '../axios.config';

const appointmentAPI = {
  book(appointment) {
    const url = `/patient/appointment`;
    return axiosClient.post(url, appointment);
  },
};

export default appointmentAPI;
