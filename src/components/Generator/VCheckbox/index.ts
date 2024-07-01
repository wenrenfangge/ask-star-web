/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-30 10:31:14
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 10:33:10
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VCheckbox/index.ts
 * @Description: 多选框组件
 */
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { Component } from './Component'
import { PropsComponent } from './PropsComponent'
import { defaultVCheckboxProps } from './VCheckbox'

export * from './VCheckbox'

const _default: QuestionComponentType = {
  title: '多选框组件',
  type: QuestionComponentTypeEnum.VCheckbox,
  Component: Component,
  PropsComponent: PropsComponent,
  defaultProps: defaultVCheckboxProps,
}

export default _default
