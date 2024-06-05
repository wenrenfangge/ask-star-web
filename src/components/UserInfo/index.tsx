import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { RouterEnum } from '../../router/routerMap'

const UserInfo: FunctionComponent = () => {
  return (
    <>
      <Link to={RouterEnum.LOGIN}>登录</Link>
    </>
  )
}

export default UserInfo
