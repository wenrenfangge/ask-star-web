import { StoreStateType, UserStateType } from '@/types/store/user'
import { useSelector } from 'react-redux'

const getUserInfo = () => {
  const {
    userInfo: { username, nickname },
  } = useSelector<StoreStateType>((state: StoreStateType) => state.user) as UserStateType
  return { username, nickname }
}

export default getUserInfo
