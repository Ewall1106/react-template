import { AxiosRequestConfig } from 'axios'
import service from './axios'

interface BaseResponse<T> {
  code: number
  status: boolean
  data: T
  message?: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(
      (res: any) => {
        resolve(res.data)
      },
      (err: any) => {
        reject(err)
      }
    )
  })
}

export default request
