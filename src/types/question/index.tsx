import { PaginationType } from '../axios'

export type QuestionCardTypes = {
  _id: string // 服务端 mongodb ，自动，_id 不重复
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
  isDeleted?: boolean
}

export type QuestionCardRequest = {
  keyword?: string
  isStar?: boolean
  isDeleted?: boolean
} & Pick<PaginationType, 'currentPage' | 'pageSize'> &
  Partial<QuestionCardTypes>
