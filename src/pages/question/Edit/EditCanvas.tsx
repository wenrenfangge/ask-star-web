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
import { changeSelectedId } from '@/store/componentsReducer'
import { useBindCanvasKeyEvents } from '@/hooks/useBindCanvasKeyEvents'

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
  return (
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
            <div
              className={wrapperClass}
              key={componentInfo.fe_id}
              onClick={(e: MouseEvent) => onClickComponent(e, fe_id)}
            >
              {getComponent(componentInfo)}
            </div>
          )
        })}
      {/* <div className={wrapperClass} onClick={() => onClickComponent(1)}>
        <VTitle />
      </div>
      <div className={wrapperClass} onClick={() => onClickComponent(2)}>
        <VInput />
      </div> */}
    </div>
  )
}

export default EditCanvas
