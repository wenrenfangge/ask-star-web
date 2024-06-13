import { ActionTipsConfig, ResponseDataType } from '@/types/axios'
import { QuestionCardRequest, QuestionCardTypes } from '@/types/question'
import { request, actionRequest } from '@/utils/request'

// 获取单个问卷信息
export const getQuestionInfo = (id: string): Promise<ResponseDataType<QuestionCardTypes>> => {
  return request({
    url: `/api/question/${id}`,
    method: 'get',
  })
}
//创建问卷
export const createQuestion = (): Promise<ResponseDataType<QuestionCardTypes>> => {
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
// 更新答卷
export const updateQuestion = (data: Partial<QuestionCardTypes>, messageTip?: ActionTipsConfig) => {
  return actionRequest({
    url: `/api/question/${data._id}`,
    method: 'patch',
    actionTipsConfig: messageTip,
    data,
  })
}
// 复制问卷
export const copyQuestion = (id: string): Promise<ResponseDataType<QuestionCardTypes>> => {
  return actionRequest({
    url: `/api/question/${id}/copy`,
    method: 'post',
  })
}
// 批量彻底删除问卷
export const deleteQuestion = (
  ids: Array<string | number>,
  messageTip?: ActionTipsConfig
): Promise<ResponseDataType<QuestionCardTypes>> => {
  return actionRequest({
    url: `/api/question`,
    method: 'delete',
    actionTipsConfig: messageTip,
    data: {
      ids: ids,
    },
  })
}
