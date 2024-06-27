import { VFormInitialType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VParagraphPropsType = {
  text?: string
  isCenter?: boolean
} & GeneratorPropsEvents<VParagraphPropsType>

export const VParagraphDefaultProps: VParagraphPropsType = {
  text: '一行段落',
  isCenter: false,
}

export const VParagraphFormInitialValues: VFormInitialType = {
  text: {
    label: '段落内容',
    propName: 'text',
    placeholder: '请输入段落内容',
  },
  isCenter: {
    label: '是否居中',
    propName: 'isCenter',
  },
}
