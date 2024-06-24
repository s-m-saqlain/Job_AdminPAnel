import axios from 'axios';

export default ({ $config }, inject) => {
  const axiosInstance = axios.create({
    baseURL: $config.public.baseURL
  });
  inject('axios', axiosInstance);
};