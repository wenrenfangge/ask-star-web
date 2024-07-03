/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-01 13:47:07
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 15:39:01
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/Layer.tsx
 * @Description: 图层
 */
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import styles from './Layer.module.scss'
import classNames from 'classnames'
import { Button, Input, Space, message } from 'antd'
import { useDispatch } from 'react-redux'
import {
  changeComponentTitle,
  changeSelectedId,
  moveComponent,
  toggleComponent,
  toggleComponentLock,
} from '@/store/componentsReducer'
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import { SortableContainer } from '@/components/DragSortable/SortableContainer'
import { SortableItem } from '@/components/DragSortable/SortableItem'
import { OnDragEndPropsType } from '@/types/dragSortable'

export const Layer: FunctionComponent = () => {
  const { componentList, selectedId } = useGetComponentInfo()
  const [changingTitleId, setChangingTitleId] = useState('')
  const dispatch = useDispatch()

  const handleTitleClick = (fe_id: string) => {
    const curComponent = componentList.find(item => item.fe_id === fe_id)
    if (curComponent && curComponent.isHidden) {
      message.error('已隐藏组件不可被选中')
      return
    }
    if (selectedId !== fe_id) {
      dispatch(changeSelectedId(fe_id))
      setChangingTitleId('')
      return
    }
    setChangingTitleId(fe_id)
  }

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim()
    if (!newTitle) {
      return
    }
    if (!selectedId) {
      return
    }
    dispatch(changeComponentTitle({ fe_id: selectedId, title: newTitle }))
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
      {componentList.map(component => {
        const { fe_id, title, isLocked, isHidden } = component

        const titleDefaultClassName = styles.title
        const titleSelectedClassName = styles.selected
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [titleSelectedClassName]: fe_id === selectedId,
        })

        const btnClassName = classNames({
          [styles.btn]: true,
          [styles.active]: isLocked || isHidden,
        })

        return (
          <SortableItem key={fe_id} id={fe_id}>
            <div className={styles.wrapper}>
              <div
                key={fe_id}
                className={titleClassName}
                onClick={() => handleTitleClick(fe_id)}
                onBlur={() => setChangingTitleId('')}
                onChange={changeTitle}
              >
                {changingTitleId === fe_id && (
                  <Input value={title} onPressEnter={() => setChangingTitleId('')} />
                )}
                {changingTitleId !== fe_id && title}
              </div>
              <div className={styles.handler}>
                <Space className={btnClassName}>
                  <Button
                    type={isHidden ? 'primary' : 'default'}
                    size="small"
                    shape="circle"
                    icon={<EyeInvisibleOutlined />}
                    onClick={() => {
                      dispatch(toggleComponent({ fe_id: fe_id, isHidden: !component.isHidden }))
                    }}
                  ></Button>
                  <Button
                    type={isLocked ? 'primary' : 'default'}
                    size="small"
                    shape="circle"
                    icon={<LockOutlined />}
                    onClick={() => {
                      dispatch(toggleComponentLock({ fe_id }))
                    }}
                  ></Button>
                </Space>
              </div>
            </div>
          </SortableItem>
        )
      })}
    </SortableContainer>
  )
}
