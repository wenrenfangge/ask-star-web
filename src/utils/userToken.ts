const USER_TOKEN_KEY = 'user_token'

/**
 * 获取token
 * @returns auth token
 */
export const getToken = () => {
  // 获取token
  return localStorage.getItem(USER_TOKEN_KEY)
}
/**
 * 设置token
 * @param token token
 */
export const setToken = (token: string) => {
  // 设置token
  localStorage.setItem(USER_TOKEN_KEY, token)
}
/**
 * 移除token
 */
export const removeToken = () => {
  // 移除token
  localStorage.removeItem(USER_TOKEN_KEY)
}
