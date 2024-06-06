import { ResponseDataType } from '@/types/axios'
import { QuestionCardRequest, QuestionCardTypes } from '@/types/question'
import request from '@/utils/request'

// 获取单个问卷信息
export function getQuestionInfo(id: string): Promise<ResponseDataType<unknown>> {
  return request({
    url: `/api/question/${id}`,
    method: 'get',
  })
}
//创建问卷
export function createQuestion(): Promise<ResponseDataType<unknown>> {
  return request({
    url: `/api/question`,
    method: 'post',
  })
}
// 获取问卷列表
export function getQuestionList(
  data: QuestionCardRequest
): Promise<ResponseDataType<QuestionCardTypes>> {
  return request({
    url: `/api/question`,
    method: 'get',
    params: data,
  })
}
