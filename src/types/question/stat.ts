import { PaginationType } from '../axios'

/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-04 17:52:54
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-08 16:54:55
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/types/question/stat.ts
 * @Description: 统计页面prop类型
 */
export type StatComponentListPropType = {
  selectedComponentId: string
  setSelectedComponentId: (id: string) => void
  setSelectedType: (type: string) => void
}

export type StatComponentListTableListRequestType = {
  _id: string
} & Pick<PaginationType, 'page' | 'pageSize'>

export type StatComponentListTableListItemType = {
  _id: string
  [key: string]: any
}
export type StatComponentListTableListType = Array<StatComponentListTableListItemType>
