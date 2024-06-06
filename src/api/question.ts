import { ResponseDataType } from '@/types/axios'
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
