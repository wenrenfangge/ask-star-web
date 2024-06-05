import React, { FunctionComponent } from 'react'
import { Typography, Space } from 'antd'
import { Link } from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const { Title } = Typography

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Link to={'/'}>
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
