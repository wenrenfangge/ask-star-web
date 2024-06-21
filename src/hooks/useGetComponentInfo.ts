import { StoreStateType } from '@/types/store'
import { useSelector } from 'react-redux'

export const useGetComponentInfo = () => {
  const { componentList } = useSelector((state: StoreStateType) => state.components)

  return {
    componentList,
  }
}
