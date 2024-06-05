import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'

import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'

const { Header, Content, Footer } = Layout

const MainLayout: FunctionComponent = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />{' '}
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
        {/* 子路由将在这里呈现 */}
      </Content>
      <Footer className={styles.footer}>闻人问卷 &copy; 2024 - present. Created by 闻人放歌</Footer>
    </Layout>
  )
}

export default MainLayout
