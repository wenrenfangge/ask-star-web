/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-30 09:52:58
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 11:08:12
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VCheckbox/VCheckbox.ts
 * @Description: checkbox组件类型
 */
import { VFormInitialType, VFormOptionType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VCheckboxPropsType = {
  /**
   * 标题
   */
  title?: string
  /**
   * 选项配置
   */
  list?: Array<VFormOptionType>
  /**
  /**
   * 是否垂直排列
   */
  isVertical?: boolean
  /**
   * 值
   */
  value?: string | number
} & GeneratorPropsEvents<VCheckboxPropsType>

export const defaultVCheckboxProps: VCheckboxPropsType = {
  title: '一行标题',
  list: [
    { label: '选项1', value: 'option1', isChecked: false },
    { label: '选项2', value: 'option2', isChecked: false },
    { label: '选项3', value: 'option3', isChecked: false },
  ],
  isVertical: false,
  value: 'option1',
}

export const VCheckboxFormInitial: VFormInitialType = {
  title: {
    label: '多项选择标题',
    propName: 'title',
    placeholder: '请输入标题',
  },
  list: {
    label: '配置选项',
    propName: 'list',
  },
  isVertical: {
    label: '是否垂直排列',
    propName: 'isVertical',
  },
  value: {
    label: '默认值',
    propName: 'value',
  },
}
