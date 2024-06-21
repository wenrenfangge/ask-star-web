import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import styles from './EditCanvas.module.scss'
import { EditCanvasProps } from '@/types/question/editCanvas'
import { Spin } from 'antd'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import { ComponentInfoType } from '@/types/store/component'
import { getComponentByType } from '@/components/Generator'
import { QuestionComponentInfo } from '@/types/question'

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
  const { componentList } = useGetComponentInfo()
  const { loading } = props
  const [currentComponentId, setCurrentComponentId] = React.useState<string>('')
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <Spin></Spin>
      </div>
    )
  }
  const onClickComponent = (id: string) => {
    setCurrentComponentId(id)
  }
  return (
    <div className={styles['canvas__wrapper']}>
      {componentList.map(componentInfo => {
        const { fe_id } = componentInfo
        const wrapperClass = classnames({
          [styles['component-wrapper']]: true,
          [styles.selected]: currentComponentId === fe_id,
        })
        return (
          <div
            className={wrapperClass}
            key={componentInfo.fe_id}
            onClick={() => onClickComponent(fe_id)}
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
