import { GeneratorPropsType } from '@/components/Generator'
import { QuestionComponentTypeEnum } from '../question'

export type ComponentInfoType = {
  fe_id: string
  title: string
  type: QuestionComponentTypeEnum
  props: GeneratorPropsType
}

export type ComponentInfoStateType = {
  componentList: Array<ComponentInfoType>
  selectedId: string
}
