/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 14:29:37
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 10:27:00
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInput/index.ts
 * @Description: textarea输入组件
 */
import { PropsComponent } from './PropsComponent'
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { VTextarea } from './Component'
import { defaultVTextareaProps } from './VTextarea'

export * from './VTextarea'
const _default: QuestionComponentType = {
  title: '标题',
  type: QuestionComponentTypeEnum.VTextarea,
  Component: VTextarea,
  PropsComponent: PropsComponent,
  defaultProps: defaultVTextareaProps,
}
export default _default
