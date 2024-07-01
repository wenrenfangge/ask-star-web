/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-27 17:13:14
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-27 17:36:56
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInfo/VInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { VFormInitialType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VInfoPropsType = {
  /**
   * 默认数据
   */
  title?: string
  /**
  /**
   * 描述
   */
  desc?: string
} & GeneratorPropsEvents<VInfoPropsType>

export const defaultVInfoProps: VInfoPropsType = {
  title: '问卷标题',
  desc: '问卷信息',
}

export const VInputFormInitial: VFormInitialType = {
  title: {
    label: '标题',
    propName: 'title',
    placeholder: '请输入问卷标题',
  },
  desc: {
    label: '问卷信息',
    propName: 'desc',
  },
}
