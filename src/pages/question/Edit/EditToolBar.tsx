import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import {
  copyComponent,
  insertComponent,
  moveComponent,
  removeComponent,
  toggleComponent,
  toggleComponentLock,
} from '@/store/componentsReducer'
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  RedoOutlined,
  UndoOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Space, Tooltip, message } from 'antd'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

export const EditToolBar: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { selectedComponent, selectedId, copiedComponent, componentList, selectedIndex } =
    useGetComponentInfo()
  const { isHidden, isLocked } = selectedComponent || {}
  const isFirst = selectedIndex <= 0
  const isLast = selectedIndex >= componentList.length - 1
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

  // 上移组件
  const moveUpComponentHandle = () => {
    if (isFirst) {
      message.error('已经是第一个组件了')
      return
    }
    dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }))
  }

  // 下移组件
  const moveDownComponentHandle = () => {
    if (isLast) {
      message.error('已经是最后一个组件了')
      return
    }
    dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }))
  }
  // 撤销
  const undo = () => {
    dispatch(UndoActionCreators.undo())
  }

  // 重做
  const redo = () => {
    dispatch(UndoActionCreators.redo())
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

      <Tooltip title="上移">
        <Button
          shape="circle"
          icon={<UpOutlined />}
          disabled={isFirst}
          onClick={moveUpComponentHandle}
        />
      </Tooltip>

      <Tooltip title="下移">
        <Button
          shape="circle"
          icon={<DownOutlined />}
          disabled={isLast}
          onClick={moveDownComponentHandle}
        />
      </Tooltip>

      <Tooltip title="撤销">
        <Button shape="circle" icon={<UndoOutlined />} onClick={undo} />
      </Tooltip>

      <Tooltip title="重做">
        <Button shape="circle" icon={<RedoOutlined />} onClick={redo} />
      </Tooltip>
    </Space>
  )
}
