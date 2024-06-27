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
