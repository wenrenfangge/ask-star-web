import { message } from 'antd'
import { ResponseType } from '@/types/axios'
import axios from 'axios'

const request = axios.create({
  timeout: 10 * 1000,
})
const actionRequest = axios.create({
  timeout: 10 * 1000,
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
})
actionRequest.interceptors.request.use(config => {
  return config
})

// 响应拦截器
request.interceptors.response.use(response => {
  const resData = (response.data || {}) as ResponseType<unknown>
  const { code, msg, data } = resData
  if (code !== 200) {
    if (message) {
      message.error(msg)
    }
    throw new Error(msg || 'Error')
  }
  return data as any
})

actionRequest.interceptors.response.use(response => {
  const resData = (response.data || {}) as ResponseType<unknown>
  const { code, msg, data } = resData
  if (code !== 200) {
    if (message) {
      message.error(msg)
    }
    throw new Error(msg || 'Error')
  } else {
    message.success(msg || '操作成功')
  }
  return data as any
})

export { request, actionRequest }
