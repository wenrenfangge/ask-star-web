import { Input, Typography } from 'antd'
import React, { FunctionComponent } from 'react'
import { VInputPropsType, defaultVIputProps } from './VInput'

const { Paragraph } = Typography
export const VInput: FunctionComponent = (props: VInputPropsType) => {
  const { title, placeholder } = { ...defaultVIputProps, ...props }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  )
}
