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
