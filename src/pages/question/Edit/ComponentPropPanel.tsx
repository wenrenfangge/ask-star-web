import React, { FunctionComponent } from 'react'
import { GeneratorPropsType, getComponentByType } from '@/components/Generator'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import { changeComponentProps } from '@/store/componentsReducer'
import { Empty } from 'antd'
import { useDispatch } from 'react-redux'

const NullPropPanel: FunctionComponent = () => {
  return (
    <div>
      <Empty description="未选择组件"></Empty>
    </div>
  )
}
export const ComponentPropPanel: FunctionComponent = () => {
  const { selectedComponent } = useGetComponentInfo()
  const dispatch = useDispatch()
  const changeProps = (newProps: GeneratorPropsType) => {
    const { fe_id } = selectedComponent
    // 更新组件属性
    dispatch(changeComponentProps({ fe_id, newProps }))
  }

  if (!selectedComponent) {
    return <NullPropPanel></NullPropPanel>
  }
  const { type, props, isLocked, isHidden } = selectedComponent
  const componentConfig = getComponentByType(type)
  const { PropsComponent } = componentConfig
  if (PropsComponent === null) {
    return <NullPropPanel></NullPropPanel>
  }
  return (
    <PropsComponent
      {...props}
      onChange={changeProps}
      disabled={isLocked || isHidden}
    ></PropsComponent>
  )
}
