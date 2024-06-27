import {
  copyComponent,
  insertComponent,
  removeComponent,
  selectNextComponent,
  selectPrevComponent,
} from '@/store/componentsReducer'
import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'

const isActiveElementValid = () => {
  const activedElement = document.activeElement

  if (activedElement === document.body) {
    return true
  }
  return false
}
/**
 * 键盘快捷键事件处理hook
 */
export const useBindCanvasKeyEvents = () => {
  const dispatch = useDispatch()
  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElementValid()) {
      return
    }
    dispatch(removeComponent())
  })
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isActiveElementValid()) {
      return
    }
    dispatch(copyComponent())
  })
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isActiveElementValid()) {
      return
    }
    dispatch(insertComponent())
  })
  useKeyPress(['uparrow'], () => {
    if (!isActiveElementValid()) {
      return
    }
    dispatch(selectPrevComponent())
  })
  useKeyPress(['downarrow'], () => {
    if (!isActiveElementValid()) {
      return
    }
    dispatch(selectNextComponent())
  })
}
