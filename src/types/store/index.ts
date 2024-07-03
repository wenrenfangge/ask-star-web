/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-19 20:59:20
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 17:45:47
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/types/store/index.ts
 * @Description: redux store type
 */
import { StateWithHistory } from 'redux-undo'
import { ComponentInfoStateType } from './component'
import { PageInfoStateType } from './pageInfo'
import { UserStateType } from './user'

export type StoreStateType = {
  user: UserStateType
  components: StateWithHistory<ComponentInfoStateType>
  pageInfo: PageInfoStateType
}
