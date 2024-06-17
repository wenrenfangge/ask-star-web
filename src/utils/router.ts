import { RouterEnum } from '@/router/routerMap'

/**
 * 检查是否是登录或注册页面
 * @param path 页面路由信息
 * @returns 是否为登录或注册页面
 */
export const isLoginOrRegister = (path: RouterEnum) => {
  // 判断是否是登录或注册页面
  const allPath = [RouterEnum.LOGIN, RouterEnum.REGISTER]
  if (allPath.includes(path)) {
    return true
  }
  return false
}
/**
 * 检查是否需要跳转登录
 * @param path 页面路由
 * @returns 是否需要跳转登录页面
 */
export const isNeedAuth = (path: RouterEnum) => {
  // 判断是否是登录或注册页面
  const allPath = [RouterEnum.LOGIN, RouterEnum.REGISTER, RouterEnum.HOME]
  if (allPath.includes(path)) {
    return false
  }
  return true
}
