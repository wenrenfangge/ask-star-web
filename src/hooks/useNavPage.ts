import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { RouterEnum } from '@/router/routerMap'
import { isLoginOrRegister, isNeedAuth } from '@/utils/router'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useNavPage = (waitingUserData: boolean) => {
  const { username } = useGetUserInfo()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (waitingUserData) {
      return
    }
    // 判断用户是否登录
    if (username) {
      // 如果当前页面是登录或注册页面，则跳转到首页
      if (isLoginOrRegister(pathname as RouterEnum)) {
        navigate(RouterEnum.MANAGE_LIST)
      }
      return
    }

    // 判断是否是登录页面
    if (isNeedAuth(pathname as RouterEnum)) {
      navigate(RouterEnum.LOGIN)
    }
  }, [username, pathname, waitingUserData])
}
