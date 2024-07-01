/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 10:19:38
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 10:27:35
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VTextarea/Component.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Input, Typography } from 'antd'
import React, { FunctionComponent } from 'react'
import { VTextareaPropsType, defaultVTextareaProps } from './VTextarea'

const { Paragraph } = Typography
const { TextArea } = Input
export const VTextarea: FunctionComponent = (props: VTextareaPropsType) => {
  const { title, placeholder } = { ...defaultVTextareaProps, ...props }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  )
}
