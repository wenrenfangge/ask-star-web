import { UserStateType } from '@/types/store/user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE: UserStateType = {
  userInfo: {
    username: '',
    avatar: '',
    role: '',
    nickname: '',
  },
  userPermissions: {
    permissions: [],
  },
  userMenus: {},
}

// 创建一个slice
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginReducer: (state: UserStateType, action: PayloadAction<UserStateType>) => {
      return action.payload
    },
    logoutReducer: () => {
      return INITIAL_STATE
    },
  },
})

export const { loginReducer, logoutReducer } = userSlice.actions
export default userSlice.reducer
