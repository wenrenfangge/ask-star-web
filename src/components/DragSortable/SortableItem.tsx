/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-03 14:35:44
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 14:59:09
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/DragSortable/SortableItem.tsx
 * @Description: draggble item
 */
import { useSortable } from '@dnd-kit/sortable'
import React, { FunctionComponent } from 'react'
import { CSS } from '@dnd-kit/utilities'
import { DragSortableItemType } from '@/types/dragSortable'

export const SortableItem: FunctionComponent<DragSortableItemType> = (
  props: DragSortableItemType
) => {
  const { id, children } = props
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}
