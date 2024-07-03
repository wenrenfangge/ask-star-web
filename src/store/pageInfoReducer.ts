/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-02 14:34:53
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-02 17:16:41
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/store/pageInfoReducer.ts
 * @Description: 页面信息reducer
 */
import { PageInfoStateType } from '@/types/store/pageInfo'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

const INITIAL_STATE: PageInfoStateType = {
  title: '',
  desc: '',
  js: '',
  css: '',
}

export const PageInfoReducer = createSlice({
  name: 'pageInfo',
  initialState: INITIAL_STATE,
  reducers: {
    resetPageInfo: (state: PageInfoStateType, action: PayloadAction<PageInfoStateType>) => {
      return action.payload
    },
    changePageTitle: produce(
      (draft: PageInfoStateType, action: PayloadAction<Pick<PageInfoStateType, 'title'>>) => {
        draft.title = action.payload.title
      }
    ),
  },
})

export const { resetPageInfo, changePageTitle } = PageInfoReducer.actions
export default PageInfoReducer.reducer
