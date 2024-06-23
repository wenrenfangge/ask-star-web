import React, { FunctionComponent } from 'react'
import { ComponentConfigGroup, ComponentConfigType } from '@/components/Generator'
import { Typography } from 'antd'
import styles from './ComponentLib.module.scss'
import { useDispatch } from 'react-redux'
import { addComponent } from '@/store/componentsReducer'
import { nanoid } from 'nanoid'

const { Title } = Typography

const generateComponent = (componentItem: ComponentConfigType) => {
  const { componentId, component } = componentItem
  const { Component, type, defaultProps, title } = component
  const dispatch = useDispatch()
  const addComponentHandle = () => {
    dispatch(
      addComponent({
        fe_id: nanoid(),
        title: title,
        type: type,
        props: defaultProps,
      })
    )
  }

  return (
    <div key={componentId} className={styles.wrapper} onClick={addComponentHandle}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}
export const ComponentLib: FunctionComponent = () => {
  return (
    <div>
      {ComponentConfigGroup.map((group, index) => {
        const { groupId, label, children = [] } = group
        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '16px' : 0 }}>
              {label}
            </Title>
            {children.map(item => {
              return generateComponent(item)
            })}
          </div>
        )
      })}
    </div>
  )
}
