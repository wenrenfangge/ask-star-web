import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import {
  copyComponent,
  insertComponent,
  removeComponent,
  toggleComponent,
  toggleComponentLock,
} from '@/store/componentsReducer'
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
} from '@ant-design/icons'
import { Button, Space, Tooltip, message } from 'antd'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

export const EditToolBar: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { selectedComponent, selectedId, copiedComponent } = useGetComponentInfo()
  const { isHidden, isLocked } = selectedComponent || {}
  // 删除组件
  const removeComponentHandle = () => {
    dispatch(removeComponent())
  }
  //显示/隐藏组件
  const EyeInvisibleHandle = () => {
    if (!selectedComponent) {
      message.error('请先选择一个组件')
      return
    }
    const isHiddenComponent = isHidden === undefined ? true : !isHidden
    dispatch(toggleComponent({ fe_id: selectedId, isHidden: isHiddenComponent }))
  }
  // 锁定/解锁组件
  const toggleLockComponentHandle = () => {
    dispatch(toggleComponentLock({ fe_id: selectedId }))
  }
  // 复制组件
  const copyComponentHandle = () => {
    if (!selectedComponent) {
      message.error('请先选择一个组件')
      return
    }
    dispatch(copyComponent())
  }

  // 粘贴组件
  const pasteComponentHandle = () => {
    dispatch(insertComponent())
  }

  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={removeComponentHandle} />
      </Tooltip>

      <Tooltip title={isHidden ? '显示' : '隐藏'}>
        <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={EyeInvisibleHandle} />
      </Tooltip>

      <Tooltip title={isLocked ? '解锁' : '锁定'}>
        <Button
          shape="circle"
          icon={<LockOutlined />}
          type={isLocked ? 'primary' : 'default'}
          onClick={toggleLockComponentHandle}
        />
      </Tooltip>

      <Tooltip title="复制">
        <Button shape="circle" icon={<CopyOutlined />} onClick={copyComponentHandle} />
      </Tooltip>

      <Tooltip title="粘贴">
        <Button
          shape="circle"
          icon={<BlockOutlined />}
          disabled={copiedComponent === null}
          onClick={pasteComponentHandle}
        />
      </Tooltip>
    </Space>
  )
}
