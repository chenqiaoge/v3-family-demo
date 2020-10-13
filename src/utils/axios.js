import axios from 'axios';

const instance = axios.create({
  baseUrl: process.env.VUE_APP_URL,
  timeout: 3000,
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use((config) => {
  return res.data.data
}, error => {
  return Promise.reject(error)
})

export function request (opts) {
  return instance(opts)
}