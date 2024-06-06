import { message } from 'antd'
import { ResponseType } from '@/types/axios'
import axios from 'axios'

const instance = axios.create({
  timeout: 10 * 1000,
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
})

// 响应拦截器
instance.interceptors.response.use(response => {
  const resData = (response.data || {}) as ResponseType
  const { code, msg, data } = resData
  if (code !== 200) {
    if (message) {
      message.error(msg)
    }
    throw new Error(msg || 'Error')
  }
  return data as any
})

export default instance
