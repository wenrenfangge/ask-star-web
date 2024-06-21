import { ComponentInfoStateType } from '@/types/store/component'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ComponentInfoStateType = {
  componentList: [],
}
export const componentsSlice = createSlice({
  name: 'components',
  initialState: initialState,
  reducers: {
    // 定义reducer
    resetComponents: (
      state: ComponentInfoStateType,
      action: PayloadAction<ComponentInfoStateType>
    ) => {
      return action.payload
    },
  },
})
export const { resetComponents } = componentsSlice.actions
export default componentsSlice.reducer
