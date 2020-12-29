import axios from 'axios';

//全局的后端api前缀
export const baseUrl = '';
const axiosInstance = axios.create({
  baseURL: baseUrl
})

export { axiosInstance }