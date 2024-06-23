import { VFormInitialType } from '@/types/common'
import React from 'react'
import { GeneratorPropsEvents } from '../events'

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
} & GeneratorPropsEvents<VTitlePropsType>

export const defaultVTitleProps: VTitlePropsType = {
  text: '一行标题',
  level: 1,
  isCenter: false,
}
export type VTitleComponent = {
  VTitle: React.FunctionComponent
}

export const VTitleFormInitial: VFormInitialType = {
  text: {
    label: '标题',
    propName: 'text',
    placeholder: '请输入标题',
  },
  level: {
    label: '层级',
    propName: 'level',
    options: [
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
    ],
  },
  isCenter: {
    label: '是否居中',
    propName: 'isCenter',
  },
}
