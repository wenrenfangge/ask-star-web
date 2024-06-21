import { ComponentInfoStateType } from './component'
import { UserStateType } from './user'

export type StoreStateType = {
  user: UserStateType
  components: ComponentInfoStateType
}
