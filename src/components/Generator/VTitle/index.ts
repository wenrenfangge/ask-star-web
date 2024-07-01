/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 19:52:00
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-27 17:57:31
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VTitle/index.ts
 * @Description: 标题组件
 */
import { defaultVTitleProps } from './VTitle'
import { VTitle } from './Component'
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { PropsComponent } from './PropsComponent'

export * from './VTitle'
const _default: QuestionComponentType = {
  title: '标题',
  type: QuestionComponentTypeEnum.VTitle,
  Component: VTitle,
  PropsComponent: PropsComponent,
  defaultProps: defaultVTitleProps,
}
export default _default
