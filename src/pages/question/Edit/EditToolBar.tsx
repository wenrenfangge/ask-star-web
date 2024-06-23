import { removeComponent } from '@/store/componentsReducer'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

export const EditToolBar: FunctionComponent = () => {
  const dispatch = useDispatch()
  const removeComponentHandle = () => {
    // 删除组件
    dispatch(removeComponent())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={removeComponentHandle} />
      </Tooltip>
    </Space>
  )
}
