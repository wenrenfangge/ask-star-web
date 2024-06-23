import { PanelTabsType } from '@/types/question/panel'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import { Space, Tabs } from 'antd'
import React, { FunctionComponent } from 'react'
import { ComponentPropPanel } from './ComponentPropPanel'

const items: Array<PanelTabsType> = [
  {
    key: 'componentLib',
    label: (
      <Space>
        <FileTextOutlined />
        属性
      </Space>
    ),
    children: <ComponentPropPanel />,
  },
  {
    key: 'layers',
    label: (
      <Space>
        <SettingOutlined />
        页面设置
      </Space>
    ),
    children: <div></div>,
  },
]
const RightPanel: FunctionComponent = () => {
  return (
    <div>
      <Tabs items={items}></Tabs>{' '}
    </div>
  )
}

export default RightPanel
