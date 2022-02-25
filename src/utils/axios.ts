import axios, { AxiosInstance } from 'axios'

const config = require('./config')
const baseURL = config[process.env.NODE_ENV].baseURL

const service: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // if (store.state.user.token) {
    //   config.headers.Authorization = `Bearer ${getToken()}`;
    // }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(res)
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
