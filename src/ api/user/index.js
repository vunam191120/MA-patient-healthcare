import axiosClient from '../axios.config';

const userAPI = {
  sendSupport(info) {
    const url = `/patient/support`;
    return axiosClient.post(url, info);
  },
};

export default userAPI;
