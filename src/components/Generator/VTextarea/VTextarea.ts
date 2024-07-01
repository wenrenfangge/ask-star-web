/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 10:19:38
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 10:39:42
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VTextarea/VInput.ts
 * @Description: Textarea类型
 */
import { VFormInitialType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VTextareaPropsType = {
  /**
   * 默认数据
   */
  title?: string
  /**
  /**
   * 标题占位符
   */
  placeholder?: string
} & GeneratorPropsEvents<VTextareaPropsType>

export const defaultVTextareaProps: VTextareaPropsType = {
  title: '文本域标题',
  placeholder: '请输入内容',
}

export const VTextareaFormInitial: VFormInitialType = {
  title: {
    label: '标题',
    propName: 'title',
    placeholder: '请输入标题',
  },
  placeholder: {
    label: '请输入内容',
    propName: 'placeholder',
  },
}
