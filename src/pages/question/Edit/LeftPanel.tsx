import { PanelTabsType } from '@/types/question/panel'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Space, Tabs } from 'antd'
import React, { FunctionComponent } from 'react'
import { ComponentLib } from './ComponentLib'
import styles from './Panel.module.scss'
import { Layer } from './Layer'

const items: Array<PanelTabsType> = [
  {
    key: 'componentLib',
    label: (
      <Space>
        <AppstoreAddOutlined />
        组件库
      </Space>
    ),
    children: <ComponentLib />,
  },
  {
    key: 'layers',
    label: (
      <Space>
        <AppstoreAddOutlined />
        图层
      </Space>
    ),
    children: <Layer />,
  },
]
const LeftPanel: FunctionComponent = () => {
  return <div className={styles.scroll}>{<Tabs items={items}></Tabs>}</div>
}

export default LeftPanel
