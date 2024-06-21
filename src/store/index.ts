import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import componentsReducer from './componentsReducer/index'

const storeConfig = configureStore({
  reducer: {
    // 添加你的reducer
    user: userReducer,
    components: componentsReducer,
  },
})

export { storeConfig }
