/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 11:43:05
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 15:42:43
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/EditCanvas.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FunctionComponent, MouseEvent } from 'react'
import classnames from 'classnames'
import styles from './EditCanvas.module.scss'
import { EditCanvasProps } from '@/types/question/editCanvas'
import { Spin } from 'antd'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import { ComponentInfoType } from '@/types/store/component'
import { getComponentByType } from '@/components/Generator'
import { QuestionComponentInfo } from '@/types/question'
import { useDispatch } from 'react-redux'
import { changeSelectedId, moveComponent } from '@/store/componentsReducer'
import { useBindCanvasKeyEvents } from '@/hooks/useBindCanvasKeyEvents'
import { SortableContainer } from '@/components/DragSortable/SortableContainer'
import { OnDragEndPropsType } from '@/types/dragSortable'
import { SortableItem } from '@/components/DragSortable/SortableItem'

const getComponent = (componentInfo: ComponentInfoType) => {
  const { type, props, fe_id } = componentInfo
  const componentConfig = getComponentByType(type) as QuestionComponentInfo
  if (componentConfig === null) {
    return null
  }
  const { Component } = componentConfig
  return <Component key={fe_id} {...props}></Component>
}
const EditCanvas: FunctionComponent<EditCanvasProps> = props => {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  useBindCanvasKeyEvents()
  const { loading } = props
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <Spin></Spin>
      </div>
    )
  }
  const onClickComponent = (event: MouseEvent, id: string) => {
    event.stopPropagation()
    dispatch(changeSelectedId(id))
  }
  const componentListWithId = componentList.map(component => ({
    ...component,
    id: component.fe_id,
  }))
  const onDragEnd = (positions: OnDragEndPropsType) => {
    dispatch(moveComponent(positions))
  }

  return (
    <SortableContainer items={componentListWithId} onDragEnd={onDragEnd}>
      <div className={styles['canvas__wrapper']}>
        {componentList
          .filter(c => !c.isHidden)
          .map(componentInfo => {
            const { fe_id, isLocked } = componentInfo
            const wrapperClass = classnames({
              [styles['component-wrapper']]: true,
              [styles.selected]: selectedId === fe_id,
              [styles.locked]: isLocked,
            })
            return (
              <SortableItem id={fe_id} key={fe_id}>
                <div
                  className={wrapperClass}
                  key={fe_id}
                  onClick={(e: MouseEvent) => onClickComponent(e, fe_id)}
                >
                  {getComponent(componentInfo)}
                </div>
              </SortableItem>
            )
          })}
        {/* <div className={wrapperClass} onClick={() => onClickComponent(1)}>
        <VTitle />
      </div>
      <div className={wrapperClass} onClick={() => onClickComponent(2)}>
        <VInput />
      </div> */}
      </div>
    </SortableContainer>
  )
}

export default EditCanvas
