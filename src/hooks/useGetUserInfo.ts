import { StoreStateType } from '@/types/store'
import { UserStateType } from '@/types/store/user'
import { useSelector } from 'react-redux'

export const useGetUserInfo = () => {
  const {
    userInfo: { username, nickname },
  } = useSelector<StoreStateType>((state: StoreStateType) => state.user) as UserStateType
  return { username, nickname }
}
