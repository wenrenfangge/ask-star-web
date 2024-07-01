/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 15:11:12
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 10:38:41
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VRadio/VRadio.ts
 * @Description: VRadio type
 */
import { VFormInitialType, VFormOptionType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VRadioPropsType = {
  /**
   * 标题
   */
  title?: string
  /**
   * 选项配置
   */
  options?: Array<VFormOptionType>
  /**
  /**
   * 是否垂直排列
   */
  isVertical?: boolean
  /**
   * 值
   */
  value?: string | number
} & GeneratorPropsEvents<VRadioPropsType>

export const defaultVRadioProps: VRadioPropsType = {
  title: '单项选择标题',
  options: [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
    { label: '选项3', value: 'option3' },
  ],
  isVertical: false,
  value: 'option1',
}

export const VRadioFormInitial: VFormInitialType = {
  title: {
    label: '单选标题',
    propName: 'title',
    placeholder: '请输入标题',
  },
  options: {
    label: '配置选项',
    propName: 'options',
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
