/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-23 14:48:15
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 17:58:57
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/hooks/useBindCanvasKeyEvents.ts
 * @Description: 键盘快捷键hook
 */
import {
  copyComponent,
  insertComponent,
  removeComponent,
  selectNextComponent,
  selectPrevComponent,
} from '@/store/componentsReducer'
import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const isActiveElementValid = () => {
  const activedElement = document.activeElement

  if (activedElement === document.body) {
    return true
  }
  if (activedElement?.matches("div[role='button']")) {
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

  useKeyPress(
    ['ctrl.z', 'meta.z'],
    () => {
      if (!isActiveElementValid()) {
        return
      }
      dispatch(UndoActionCreators.undo())
    },
    {
      exactMatch: true,
    }
  )
  useKeyPress(['ctrl.shift.z', 'meta.shift.z'], () => {
    if (!isActiveElementValid()) {
      return
    }
    dispatch(UndoActionCreators.redo())
  })
}
