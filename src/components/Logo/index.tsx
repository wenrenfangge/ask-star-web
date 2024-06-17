import React, { FunctionComponent, useEffect, useState } from 'react'
import { Typography, Space } from 'antd'
import { Link } from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'
import { RouterEnum } from '@/router/routerMap'

const { Title } = Typography

const Logo: FunctionComponent = () => {
  const [pathname, setPathname] = useState<RouterEnum>(RouterEnum.HOME)
  const { username } = useGetUserInfo()
  useEffect(() => {
    if (username) {
      setPathname(RouterEnum.MANAGE_LIST)
    }
  }, [username])

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>闻人问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
