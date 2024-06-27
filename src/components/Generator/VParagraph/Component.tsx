import React, { FunctionComponent } from 'react'
import { VParagraphDefaultProps, VParagraphPropsType } from './VParagraph'
import { Typography } from 'antd'

const { Paragraph } = Typography
export const VParagraph: FunctionComponent<VParagraphPropsType> = (props: VParagraphPropsType) => {
  const { text, isCenter } = { ...VParagraphDefaultProps, ...props }

  const textList = text?.split('\n') || []

  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'left' }}>
      {textList.map((item, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {item}
        </span>
      ))}
    </Paragraph>
  )
}
