/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-14 13:44:56
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 17:46:39
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/store/index.ts
 * @Description: redux store入口文件
 */
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import componentsReducer from './componentsReducer/index'
import pageInfoReducer from './pageInfoReducer'
import undoable, { excludeAction } from 'redux-undo'

const storeConfig = configureStore({
  reducer: {
    // 添加你的reducer
    user: userReducer,
    components: undoable(componentsReducer, {
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ]),
    }),
    pageInfo: pageInfoReducer,
  },
})

export { storeConfig }
