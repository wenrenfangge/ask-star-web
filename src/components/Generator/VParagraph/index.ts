/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-23 16:00:11
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-27 17:56:01
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VParagraph/index.ts
 * @Description: 段落组件
 */
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { PropsComponent } from './PropsComponent'
import { VParagraph } from './Component'
import { VParagraphDefaultProps } from './VParagraph'

export * from './VParagraph'

const _default: QuestionComponentType = {
  title: '一行段落',
  type: QuestionComponentTypeEnum.VParagraph,
  Component: VParagraph,
  PropsComponent: PropsComponent,
  defaultProps: VParagraphDefaultProps,
}
export default _default
