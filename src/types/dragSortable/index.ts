/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-03 14:22:29
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 15:27:08
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/types/dragSortable/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ComponentInfoType } from '../store/component'

export type DragSortablePropsType = {
  items: Array<{ id: string } & ComponentInfoType>
  children: JSX.Element | Array<JSX.Element>
  onDragEnd: (positions: OnDragEndPropsType) => void
}

export type DragSortableItemType = {
  id: string
  children: JSX.Element
}

export type OnDragEndPropsType = {
  oldIndex: number
  newIndex: number
}
