import { ComponentInfoStateType, ComponentInfoType } from '@/types/store/component'
/**
 * 获取下一个选中id
 * @param currentIndex 当前id
 * @param componentList 画布组件列表
 * @returns 下一个选中id
 */
export const getNextSelectedId = (
  fe_id: string,
  componentList: Array<ComponentInfoType>
): string => {
  const displayComponentList = componentList.filter(item => !item.isHidden)
  const currentIndex = displayComponentList.findIndex(item => item.fe_id === fe_id)
  if (currentIndex < 0) {
    return ''
  }
  let nextSelectedId = ''
  if (displayComponentList.length <= 1) {
    nextSelectedId = ''
  } else {
    if (currentIndex === displayComponentList.length - 1) {
      nextSelectedId = displayComponentList[currentIndex - 1].fe_id
    } else {
      nextSelectedId = displayComponentList[currentIndex + 1].fe_id
    }
  }
  return nextSelectedId
}
/**
 * 插入组件
 * @param draft immer draft, store state
 * @param newComponent 待插入组件
 */
export const insertNewComponent = (
  draft: ComponentInfoStateType,
  newComponent: ComponentInfoType
) => {
  const { componentList, selectedId } = draft
  const index = componentList.findIndex(item => item.fe_id === selectedId)
  if (index < 0) {
    draft.componentList.push(newComponent)
  } else {
    draft.componentList.splice(index + 1, 0, newComponent)
  }
  draft.selectedId = newComponent.fe_id
}
