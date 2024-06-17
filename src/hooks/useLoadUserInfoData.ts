import { getUserInfo } from '@/api/user'
import { loginReducer } from '@/store/userReducer'
import { UserInfoType, UserStateType } from '@/types/store/user'
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetUserInfo } from './useGetUserInfo'

const loadUserInfoData = () => {
  const [waitingUserData, setWaitingUserData] = useState<boolean>(true)
  const dispatch = useDispatch()
  const { username } = useGetUserInfo()

  const { run } = useRequest(getUserInfo, {
    manual: true,
    onSuccess: data => {
      const metaData = data as UserInfoType
      const userInfo: UserStateType = {
        userInfo: metaData,
      }
      dispatch(loginReducer(userInfo))
    },
    onFinally: () => {
      setWaitingUserData(false)
    },
  })

  useEffect(() => {
    if (username) {
      setWaitingUserData(false)
      return
    }
    // 加载用户信息数据
    run()
  }, [username])

  return {
    waitingUserData,
  }
}

export default loadUserInfoData
