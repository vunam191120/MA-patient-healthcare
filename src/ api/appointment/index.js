import axiosClient from '../axios.config';

const appointmentAPI = {
  book(appointment) {
    const url = `/patient/appointment`;
    return axiosClient.post(url, appointment);
  },
  getAll() {
    const url = `/patient/account/appointment`;
    return axiosClient.get(url);
  },
  getDoctorSchedule(doctor_id, date) {
    // const url = `/patient/dashboard/appointment/check?doctor_id=15&date=2022-11-19`;
    const url = `/patient/dashboard/appointment/check?doctor_id=${doctor_id}&date=${date}`;
    return axiosClient.get(url);
  },
};

export default appointmentAPI;
