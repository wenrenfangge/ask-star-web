import React from 'react'

export type VTitlePropsType = {
  /**
   * 标题
   */
  text?: string
  /**
   * 标题级别
   */
  level?: 1 | 2 | 3 | 4 | 5
  /**
   * 标题是否居中
   */
  isCenter?: boolean
  /**
   * 标题颜色
   */
  color?: string
  /**
   * 标题大小
   */
  size?: string
  /**
   * 标题字体粗细
   */
  weight?: string
}

export const defaultVTitleProps: VTitlePropsType = {
  text: '输入内容',
  level: 1,
  isCenter: false,
}
export type VTitleComponent = {
  VTitle: React.FunctionComponent
}
