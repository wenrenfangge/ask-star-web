import { GeneratorPropsType } from '@/components/Generator'
import { ComponentInfoStateType, ComponentInfoType } from '@/types/store/component'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { getNextSelectedId, insertNewComponent } from './utils'
import { message } from 'antd'
import { cloneDeep } from 'lodash'
import { nanoid } from 'nanoid'
import { OnDragEndPropsType } from '@/types/dragSortable'
import { arrayMove } from '@dnd-kit/sortable'

const initialState: ComponentInfoStateType = {
  componentList: [],
  selectedId: '',
  copiedComponent: null,
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
    // 修改选中组件
    changeSelectedId: produce((draft: ComponentInfoStateType, action: PayloadAction<string>) => {
      draft.selectedId = action.payload
    }),
    // 修改layer标题
    changeComponentTitle: produce(
      (
        draft: ComponentInfoStateType,
        action: PayloadAction<Pick<ComponentInfoType, 'fe_id' | 'title'>>
      ) => {
        const { fe_id, title } = action.payload
        const currentComponent = draft.componentList.find(item => item.fe_id === fe_id)
        if (currentComponent) {
          currentComponent.title = title
        }
      }
    ),
    // 添加组件
    addComponent: produce(
      (draft: ComponentInfoStateType, action: PayloadAction<ComponentInfoType>) => {
        const newComponent = action.payload
        insertNewComponent(draft, newComponent)
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
      if (selectedId === '') {
        message.error('请先选择组件后再操作！')
        return
      }

      draft.selectedId = getNextSelectedId(selectedId, componentList)
      const index = componentList.findIndex(item => item.fe_id === selectedId)
      draft.componentList.splice(index, 1)
    }),
    // 显示/隐藏组件
    toggleComponent: produce(
      (
        draft: ComponentInfoStateType,
        action: PayloadAction<Pick<ComponentInfoType, 'fe_id' | 'isHidden'>>
      ) => {
        const { componentList } = draft
        const { fe_id, isHidden } = action.payload

        if (isHidden) {
          draft.selectedId = getNextSelectedId(fe_id, componentList)
        } else {
          draft.selectedId = fe_id
        }
        const currentComponent = componentList.find(item => item.fe_id === fe_id)
        if (currentComponent) {
          currentComponent.isHidden = isHidden
        }
      }
    ),
    // 锁定/解锁组件
    toggleComponentLock: produce(
      (draft: ComponentInfoStateType, action: PayloadAction<Pick<ComponentInfoType, 'fe_id'>>) => {
        const { componentList } = draft
        const { fe_id } = action.payload
        if (fe_id === '') {
          message.error('请先选择组件后再操作！')
          return
        }

        const currentComponent = componentList.find(item => item.fe_id === fe_id)
        if (currentComponent) {
          currentComponent.isLocked = !currentComponent.isLocked
        }
      }
    ),
    // 复制组件
    copyComponent: produce((draft: ComponentInfoStateType) => {
      const { componentList, selectedId } = draft
      if (selectedId === '') {
        message.error('请先选择组件后再操作！')
        return
      }

      const copiedComponent = componentList.find(item => item.fe_id === selectedId)
      if (!copiedComponent) {
        return
      }
      if (copiedComponent) {
        draft.copiedComponent = cloneDeep(copiedComponent)
        message.success('已复制组件')
      }
    }),
    insertComponent: produce((draft: ComponentInfoStateType) => {
      if (draft.copiedComponent === null) {
        message.error('请先复制组件后再操作！')
        return
      }
      const { copiedComponent } = draft
      copiedComponent.fe_id = nanoid()
      insertNewComponent(draft, copiedComponent)
    }),
    // 选中上一个组件
    selectPrevComponent: produce((draft: ComponentInfoStateType) => {
      const { componentList, selectedId } = draft
      const selectedIndex = componentList.findIndex(item => item.fe_id === selectedId)
      if (selectedIndex < 1) {
        return
      }
      draft.selectedId = componentList[selectedIndex - 1].fe_id
    }),
    // 选中下一个组件
    selectNextComponent: produce((draft: ComponentInfoStateType) => {
      const { componentList, selectedId } = draft
      const selectedIndex = componentList.findIndex(item => item.fe_id === selectedId)
      if (selectedIndex < 0) {
        return
      }
      if (selectedIndex >= componentList.length - 1) {
        return
      }
      draft.selectedId = componentList[selectedIndex + 1].fe_id
    }),
    // 移动组件位置
    moveComponent: produce(
      (draft: ComponentInfoStateType, action: PayloadAction<OnDragEndPropsType>) => {
        const { componentList: currentComponentList, selectedId } = draft
        if (selectedId === '') {
          message.error('请先选择组件后再操作！')
          return
        }
        const { oldIndex, newIndex } = action.payload
        const newComponentList = arrayMove(currentComponentList, oldIndex, newIndex)
        draft.componentList = newComponentList
      }
    ),
  },
})
export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps,
  removeComponent,
  toggleComponent,
  toggleComponentLock,
  copyComponent,
  insertComponent,
  selectPrevComponent,
  selectNextComponent,
  changeComponentTitle,
  moveComponent,
} = componentsSlice.actions
export default componentsSlice.reducer
