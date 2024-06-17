import React, { FunctionComponent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RouterEnum } from '../../router/routerMap'
import { Button, Space, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { removeToken } from '@/utils/userToken'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { useDispatch } from 'react-redux'
import { logoutReducer } from '@/store/userReducer'

const UserInfo: FunctionComponent = () => {
  const { username, nickname } = useGetUserInfo()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    removeToken()
    dispatch(logoutReducer())
    navigate(RouterEnum.LOGIN)
    message.success('退出成功')
  }
  const UserInfoElement = (
    <>
      <Space>
        <span style={{ color: '#e8e8e8' }}>
          <UserOutlined />
          {nickname}
        </span>
        <Button type="link" onClick={logout}>
          退出
        </Button>
      </Space>
    </>
  )
  const UserLoginElement = (
    <>
      <Link to={RouterEnum.LOGIN}>登录</Link>
    </>
  )
  return <div>{username ? UserInfoElement : UserLoginElement}</div>
}

export default UserInfo
