/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-30 10:08:52
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 11:46:47
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VCheckbox/Component.tsx
 * @Description: checkbox显示组件
 */
import React, { FunctionComponent } from 'react'
import { VCheckboxPropsType, defaultVCheckboxProps } from './VCheckbox'
import { Checkbox, Space, Typography } from 'antd'

const { Paragraph } = Typography

export const Component: FunctionComponent<VCheckboxPropsType> = (props: VCheckboxPropsType) => {
  const { title, list = [], isVertical } = { ...defaultVCheckboxProps, ...props }
  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {list.map(item => {
          const { label, value, isChecked } = item
          return (
            <Checkbox key={`VCheckbox-${value}`} checked={isChecked}>
              {label}
            </Checkbox>
          )
        })}
      </Space>
    </div>
  )
}
