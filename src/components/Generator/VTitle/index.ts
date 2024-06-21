import { defaultVTitleProps } from './VTitle'
import { VTitle } from './Component'
import { QuestionComponentType, QuestionComponentTypeEnum } from '@/types/question'

export * from './VTitle'
const _default: QuestionComponentType = {
  title: '标题',
  type: QuestionComponentTypeEnum.VTitle,
  Component: VTitle,
  defaultProps: defaultVTitleProps,
}
export default _default
