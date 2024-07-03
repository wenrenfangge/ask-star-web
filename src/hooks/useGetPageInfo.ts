/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-02 15:17:40
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-02 15:20:53
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/hooks/useGetPageInfo.ts
 * @Description: 获取页面设置信息
 */

import { StoreStateType } from '@/types/store'
import { useSelector } from 'react-redux'

export const useGetPageInfo = () => {
  const pageInfo = useSelector((state: StoreStateType) => state.pageInfo)
  return pageInfo
}
