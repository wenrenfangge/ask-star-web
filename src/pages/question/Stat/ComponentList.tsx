/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 11:43:05
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-05 10:17:13
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/EditCanvas.tsx
 * @Description: 统计页面组件列表
 */
import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import { ComponentInfoType } from '@/types/store/component'
import { getComponentByType } from '@/components/Generator'
import { QuestionComponentInfo } from '@/types/question'
import styles from './ComponentList.module.scss'
import { StatComponentListPropType } from '@/types/question/stat'

const getComponent = (componentInfo: ComponentInfoType) => {
  const { type, props, fe_id } = componentInfo
  const componentConfig = getComponentByType(type) as QuestionComponentInfo
  if (componentConfig === null) {
    return null
  }
  const { Component } = componentConfig
  return <Component key={fe_id} {...props}></Component>
}
const ComponentList: FunctionComponent<StatComponentListPropType> = (
  props: StatComponentListPropType
) => {
  const { selectedComponentId, setSelectedComponentId, setSelectedType } = props
  const { componentList } = useGetComponentInfo()

  return (
    <div className={styles['canvas__wrapper']}>
      {componentList
        .filter(c => !c.isHidden)
        .map(componentInfo => {
          const { fe_id, isLocked, type } = componentInfo
          const wrapperClass = classnames({
            [styles['component-wrapper']]: true,
            [styles.selected]: selectedComponentId === fe_id,
            [styles.locked]: isLocked,
          })
          return (
            <div
              className={wrapperClass}
              key={fe_id}
              onClick={() => {
                setSelectedComponentId(fe_id)
                setSelectedType(type)
              }}
            >
              {getComponent(componentInfo)}
            </div>
          )
        })}
    </div>
  )
}

export default ComponentList
