/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-19 21:17:08
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 17:46:19
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/hooks/useGetComponentInfo.ts
 * @Description: 获取选中组件信息hook
 */
import { StoreStateType } from '@/types/store'
import { ComponentInfoType } from '@/types/store/component'
import { useSelector } from 'react-redux'

export const useGetComponentInfo = () => {
  const { componentList, selectedId, copiedComponent } = useSelector(
    (state: StoreStateType) => state.components.present
  )
  const selectedComponent = componentList.find(
    component => component.fe_id === selectedId
  ) as ComponentInfoType
  const selectedIndex = componentList.findIndex(component => component.fe_id === selectedId)
  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
    selectedIndex,
  }
}
