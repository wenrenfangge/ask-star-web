/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-27 17:42:50
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-27 17:55:20
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInfo/index.ts
 * @Description: 问卷信息组件
 */
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { Component } from './Component'
import { PropsComponent } from './PropsComponent'
import { defaultVInfoProps } from './VInfo'

export * from './VInfo'
const _default: QuestionComponentType = {
  title: '组件信息',
  type: QuestionComponentTypeEnum.VInfo,
  Component: Component,
  PropsComponent: PropsComponent,
  defaultProps: defaultVInfoProps,
}
export default _default
