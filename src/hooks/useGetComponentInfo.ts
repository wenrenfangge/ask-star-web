import { StoreStateType } from '@/types/store'
import { ComponentInfoType } from '@/types/store/component'
import { useSelector } from 'react-redux'

export const useGetComponentInfo = () => {
  const { componentList, selectedId, copiedComponent } = useSelector(
    (state: StoreStateType) => state.components
  )
  const selectedComponent = componentList.find(
    component => component.fe_id === selectedId
  ) as ComponentInfoType
  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  }
}
