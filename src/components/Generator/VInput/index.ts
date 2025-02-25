/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 14:29:37
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-27 17:55:39
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInput/index.ts
 * @Description: 输入组件
 */
import { PropsComponent } from './PropsComponent'
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'
import { VInput } from './Component'
import { defaultVIputProps } from './VInput'

export * from './VInput'
const _default: QuestionComponentType = {
  title: '标题',
  type: QuestionComponentTypeEnum.VInput,
  Component: VInput,
  PropsComponent: PropsComponent,
  defaultProps: defaultVIputProps,
}
export default _default
