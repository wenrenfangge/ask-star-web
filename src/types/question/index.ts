import React from 'react'
import { PaginationType } from '../axios'
import { GeneratorPropsType } from '@/components/Generator/index'
import type { FunctionComponent } from 'react'

export type QuestionCardTypes = {
  _id: string // 服务端 mongodb ，自动，_id 不重复
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
  isDeleted?: boolean
} & QuestionCardEvents

export type QuestionCardRequest = {
  keyword?: string
  isStar?: boolean
  isDeleted?: boolean
} & Pick<PaginationType, 'page' | 'pageSize'> &
  Partial<QuestionCardTypes>

export interface QuestionCardEvents {
  deleteSuccess?: () => void
}

export type QuestionComponentType = {
  title: string
  type: QuestionComponentTypeEnum
  Component: React.FC<GeneratorPropsType>
  PropsComponent: React.FC<GeneratorPropsType>
  defaultProps: GeneratorPropsType
}

export enum QuestionComponentTypeEnum {
  VInput = 'VInput',
  VTitle = 'VTitle',
}
export interface QuestionInfoResponse {
  title: string
  id: string
  components: Array<QuestionComponentInfo>
}
export interface QuestionComponentInfo {
  id: string
  title: string
  type: QuestionComponentTypeEnum
  Component: FunctionComponent<GeneratorPropsType>
  PropsComponent: React.FC<GeneratorPropsType>
  props: GeneratorPropsType
  defaultProps?: GeneratorPropsType
}
