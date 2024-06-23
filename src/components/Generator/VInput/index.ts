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
