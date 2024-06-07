import { PaginationType } from '../axios'

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
