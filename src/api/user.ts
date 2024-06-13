import { LoginResponseType, LoginType } from '@/types/Login'
import { ResponseDataType } from '@/types/axios'
import { request, actionRequest } from '@/utils/request'

/**
 * 获取用户信息
 * @returns 用户信息
 */
export const getUserInfo = (): Promise<LoginResponseType> => {
  return request({
    url: '/api/user/info',
    method: 'get',
  })
}
/**
 * 登录
 * @param data 登录参数
 * @returns jwt
 */
export const login = (data: LoginType): Promise<LoginResponseType> => {
  return actionRequest({
    url: '/api/user/login',
    method: 'post',
    data,
    actionTipsConfig: {
      isMessageTip: true,
    },
  })
}
/**
 * 注册
 * @param data 注册参数
 * @returns 注册结果、jwt
 */
export const register = (data: LoginType): Promise<ResponseDataType<unknown>> => {
  return actionRequest({
    url: '/api/user/register',
    method: 'post',
    data,
    actionTipsConfig: {
      isMessageTip: true,
    },
  })
}
