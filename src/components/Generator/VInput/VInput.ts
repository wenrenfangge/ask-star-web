/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 19:41:03
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-01 16:24:45
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInput/VInput.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { VFormInitialType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VInputPropsType = {
  /**
   * 默认数据
   */
  title?: string
  /**
  /**
   * 标题占位符
   */
  placeholder?: string
} & GeneratorPropsEvents<VInputPropsType>

export const defaultVIputProps: VInputPropsType = {
  title: '输入框标题',
  placeholder: '请输入内容',
}

export const VInputFormInitial: VFormInitialType = {
  title: {
    label: '输入框标题',
    propName: 'title',
    placeholder: '请输入标题',
  },
  placeholder: {
    label: '请输入内容',
    propName: 'placeholder',
  },
}
