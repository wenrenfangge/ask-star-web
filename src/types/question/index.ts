/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-05 10:11:33
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 16:35:11
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/types/question/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  VParagraph = 'VParagraph',
  VInfo = 'VInfo',
  VTextarea = 'VTextarea',
  VRadio = 'VRadio',
  VCheckbox = 'VCheckbox',
  VSelect = 'VSelect',
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
export type GeneratorComponetsMapKeyValuePairType = [
  QuestionComponentTypeEnum,
  QuestionComponentType,
]
export type GeneratorComponetsMapType = GeneratorComponetsMapKeyValuePairType[]
