/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-27 17:12:25
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 09:48:04
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInfo/Component.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FunctionComponent } from 'react'
import { VInfoPropsType, defaultVInfoProps } from './VInfo'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography
export const Component: FunctionComponent<VInfoPropsType> = (props: VInfoPropsType) => {
  const { title, desc } = { ...defaultVInfoProps, ...props }

  const descTextList = desc?.split('\n') || []
  return (
    <div style={{ textAlign: 'center' }}>
      <Title style={{ fontSize: 24 }}>{title}</Title>
      <Paragraph>
        {descTextList.map((text, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {text}
          </span>
        ))}
      </Paragraph>
    </div>
  )
}
