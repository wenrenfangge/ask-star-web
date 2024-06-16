import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

const storeConfig = configureStore({
  reducer: {
    // 添加你的reducer
    user: userReducer,
  },
})

export { storeConfig }
