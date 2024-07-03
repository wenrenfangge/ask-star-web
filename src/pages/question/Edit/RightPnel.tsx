/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-22 10:19:43
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-02 14:20:33
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/RightPnel.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PanelTabsType, RightPanelTabEnum } from '@/types/question/panel'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import { Space, Tabs } from 'antd'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { ComponentPropPanel } from './ComponentPropPanel'
import { PageSetting } from './PageSetting'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'

const items: Array<PanelTabsType> = [
  {
    key: 'property',
    label: (
      <Space>
        <FileTextOutlined />
        属性
      </Space>
    ),
    children: <ComponentPropPanel />,
  },
  {
    key: 'pageSetting',
    label: (
      <Space>
        <SettingOutlined />
        页面设置
      </Space>
    ),
    children: <PageSetting />,
  },
]
const RightPanel: FunctionComponent = () => {
  const [activeKey, setActiveKey] = useState<RightPanelTabEnum>(RightPanelTabEnum.PROPERTY_TAB)
  const { selectedId } = useGetComponentInfo()

  useEffect(() => {
    if (selectedId) {
      setActiveKey(RightPanelTabEnum.PROPERTY_TAB)
    } else {
      setActiveKey(RightPanelTabEnum.PAGE_SETTING_TAB)
    }
  }, [selectedId])
  return (
    <div>
      <Tabs
        activeKey={activeKey}
        items={items}
        onChange={key => setActiveKey(key as RightPanelTabEnum)}
      ></Tabs>{' '}
    </div>
  )
}

export default RightPanel
