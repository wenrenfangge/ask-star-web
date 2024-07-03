/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-03 14:19:18
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 15:38:51
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/DragSortable/SortableContainer.tsx
 * @Description: 拖拽排序容器
 */
import React, { FunctionComponent } from 'react'
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  DragEndEvent,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DragSortablePropsType } from '@/types/dragSortable'

export const SortableContainer: FunctionComponent<DragSortablePropsType> = (
  props: DragSortablePropsType
) => {
  const { items, children, onDragEnd } = props
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  )

  const onDragEndHandle = (event: DragEndEvent) => {
    const { active, over } = event
    if (over === null) {
      return
    }
    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id)
      const newIndex = items.findIndex(item => item.id === over.id)
      const positions = { oldIndex, newIndex }
      onDragEnd(positions)
    }
  }
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEndHandle}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}
