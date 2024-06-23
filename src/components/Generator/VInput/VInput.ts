import { VFormInitialType } from '@/types/common'
import { GeneratorPropsEvents } from '../events'

export type VInputPropsType = {
  /**
   * 默认数据
   */
  title?: string
  /**
  /**
   * 标题占位符
   */
  placeholder?: string
} & GeneratorPropsEvents<VInputPropsType>

export const defaultVIputProps: VInputPropsType = {
  title: '标题',
  placeholder: '请输入内容',
}

export const VInputFormInitial: VFormInitialType = {
  title: {
    label: '标题',
    propName: 'title',
    placeholder: '请输入标题',
  },
  placeholder: {
    label: '请输入内容',
    propName: 'placeholder',
  },
}
