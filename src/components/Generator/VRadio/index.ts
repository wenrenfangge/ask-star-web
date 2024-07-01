/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 16:33:24
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 16:44:50
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VRadio/index.ts
 * @Description: 单选组件
 */

import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { Component } from './Component'
import { PropsComponent } from './PropsComponent'
import { defaultVRadioProps } from './VRadio'

export * from './VRadio'

const _default: QuestionComponentType = {
  title: '单选组件',
  type: QuestionComponentTypeEnum.VRadio,
  Component: Component,
  PropsComponent: PropsComponent,
  defaultProps: defaultVRadioProps,
}

export default _default
