import { ComponentInfoType } from '@/types/store/component'

export const getNextSelectedId = (
  currentIndex: number,
  componentList: Array<ComponentInfoType>
) => {
  if (currentIndex < 0) {
    return ''
  }
  let nextSelectedId = ''
  if (componentList.length <= 1) {
    nextSelectedId = ''
  } else {
    if (currentIndex === componentList.length - 1) {
      nextSelectedId = componentList[currentIndex - 1].fe_id
    } else {
      nextSelectedId = componentList[currentIndex + 1].fe_id
    }
  }
  return nextSelectedId
}
