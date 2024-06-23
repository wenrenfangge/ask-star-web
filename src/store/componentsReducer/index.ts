import { GeneratorPropsType } from '@/components/Generator'
import { ComponentInfoStateType, ComponentInfoType } from '@/types/store/component'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { getNextSelectedId } from './utils'

const initialState: ComponentInfoStateType = {
  componentList: [],
  selectedId: '',
}
export const componentsSlice = createSlice({
  name: 'components',
  initialState: initialState,
  reducers: {
    // 定义reducer
    resetComponents: (
      state: ComponentInfoStateType,
      action: PayloadAction<ComponentInfoStateType>
    ) => {
      return action.payload
    },
    // 修改组件
    changeSelectedId: produce((draft: ComponentInfoStateType, action: PayloadAction<string>) => {
      draft.selectedId = action.payload
    }),
    // 添加组件
    addComponent: produce(
      (draft: ComponentInfoStateType, action: PayloadAction<ComponentInfoType>) => {
        const newComponent = action.payload
        const { componentList, selectedId } = draft
        const index = componentList.findIndex(item => item.fe_id === selectedId)
        if (index < 0) {
          draft.componentList.push(newComponent)
        } else {
          draft.componentList.splice(index + 1, 0, newComponent)
        }
      }
    ),
    // 修改组件属性
    changeComponentProps: produce(
      (
        draft: ComponentInfoStateType,
        action: PayloadAction<{ fe_id: string; newProps: GeneratorPropsType }>
      ) => {
        const { componentList } = draft
        const { fe_id, newProps } = action.payload
        const currentComponent = componentList.find(item => item.fe_id === fe_id)
        if (currentComponent) {
          currentComponent.props = {
            ...currentComponent,
            ...newProps,
          }
        }
      }
    ),
    // 删除组件
    removeComponent: produce((draft: ComponentInfoStateType) => {
      const { componentList, selectedId } = draft
      const index = componentList.findIndex(item => item.fe_id === selectedId)
      draft.selectedId = getNextSelectedId(index, componentList)
      draft.componentList.splice(index, 1)
    }),
  },
})
export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps,
  removeComponent,
} = componentsSlice.actions
export default componentsSlice.reducer
