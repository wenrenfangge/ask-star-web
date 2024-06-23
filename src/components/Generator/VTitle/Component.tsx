import { Typography } from 'antd'
import React, { FunctionComponent } from 'react'
import { VTitlePropsType, defaultVTitleProps } from './VTitle'

const { Title } = Typography

export const VTitle: FunctionComponent<VTitlePropsType> = (props: VTitlePropsType) => {
  // 默认属性
  const { text, level = 1, isCenter = false } = { ...defaultVTitleProps, ...props }
  const genFontSize = (level: number) => {
    switch (level) {
      case 1:
        return '24px'
      case 2:
        return '20px'
      case 3:
        return '16px'
      default:
        return '16px'
    }
  }
  return (
    <div>
      <Title
        style={{
          textAlign: isCenter ? 'center' : 'start',
          marginBottom: '0',
          marginTop: '0',
          fontSize: genFontSize(level),
        }}
        level={level}
      >
        {text}
      </Title>
    </div>
  )
}
