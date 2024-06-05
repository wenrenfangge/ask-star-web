import React, { FunctionComponent } from 'react'
import { Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouterEnum } from '../router/routerMap'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography

const Home: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷 100 份，发布问卷90份，收到答卷 970 份</Paragraph>
        <div>
          <Button type="primary" onClick={() => navigate(RouterEnum.MANAGE_LIST)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
