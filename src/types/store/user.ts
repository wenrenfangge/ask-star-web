export type StoreStateType = {
  user: UserStateType
}
export type UserStateType = {
  // 用户信息
  userInfo: UserInfoType
  // 用户权限
  userPermissions?: UserPermissionsType
  // 用户菜单
  userMenus?: UserMenuType
}
export type UserInfoType = {
  // 用户名
  username: string
  // 用户头像
  avatar?: string
  // 用户角色
  role?: string
  nickname: string
}
export type UserPermissionsType = {
  // 用户权限
  permissions: string[]
}
export type UserMenuType = {
  [key: string]: unknown
}
