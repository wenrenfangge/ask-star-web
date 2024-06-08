import { ActionTipsConfig, AxiosExtraConfig, ResponseDataType } from '@/types/axios'
import { QuestionCardRequest, QuestionCardTypes } from '@/types/question'
import { request, actionRequest } from '@/utils/request'

// 获取单个问卷信息
export function getQuestionInfo(id: string): Promise<ResponseDataType<QuestionCardTypes>> {
  return request({
    url: `/api/question/${id}`,
    method: 'get',
  })
}
//创建问卷
export function createQuestion(): Promise<ResponseDataType<QuestionCardTypes>> {
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
export function updateQuestion(data: Partial<QuestionCardTypes>, messageTip?: ActionTipsConfig) {
  return actionRequest({
    url: `/api/question/${data._id}`,
    method: 'patch',
    actionTipsConfig: messageTip,
    data,
  })
}
// 复制问卷
export function copyQuestion(id: string): Promise<ResponseDataType<QuestionCardTypes>> {
  return actionRequest({
    url: `/api/question/${id}/copy`,
    method: 'post',
  })
}
// 删除问卷
export function deleteQuestion(
  data: Partial<QuestionCardTypes>
): Promise<ResponseDataType<QuestionCardTypes>> {
  return actionRequest({
    url: `/api/question/${data._id}`,
    method: 'delete',
    data,
  })
}
