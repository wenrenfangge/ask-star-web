/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-08 11:24:36
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-08 17:27:28
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/api/stat.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ResponseDataType } from '@/types/axios'
import {
  StatComponentListTableListRequestType,
  StatComponentListTableListType,
} from '@/types/question/stat'
import { request } from '@/utils/request'

/**
 * 获取问卷统计列表
 * @param data 请求参数
 * @returns 问卷统计列表
 */
export const getQuestionStatList = (
  data: StatComponentListTableListRequestType
): Promise<ResponseDataType<StatComponentListTableListType>> => {
  return request({
    url: `/api/stat/${data._id}`,
    method: 'get',
    data,
  })
}
