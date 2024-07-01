/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 15:35:41
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 16:45:46
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VRadio/Component.tsx
 * @Description: 单选内容组件
 */
import React, { FunctionComponent } from 'react'
import { VRadioPropsType, defaultVRadioProps } from './VRadio'
import { Radio, Space, Typography } from 'antd'

const { Paragraph } = Typography
export const Component: FunctionComponent<VRadioPropsType> = (props: VRadioPropsType) => {
  const { title, options = [], isVertical, value } = { ...defaultVRadioProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map((opt, index) => {
            const { label, value } = opt
            return (
              <Radio value={value} key={`VRadio-${index}`}>
                {label}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </div>
  )
}
