import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import styles from './MainLayout.module.scss'

import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'
import useLoadUserInfoData from '@/hooks/useLoadUserInfoData'

const { Header, Content, Footer } = Layout

const MainLayout: FunctionComponent = () => {
  const { waitingUserData } = useLoadUserInfoData()
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
      <Layout className={styles.main}>
        <Content>
          {waitingUserData ? (
            <div
              style={{
                textAlign: 'center',
                marginTop: 60,
              }}
            >
              <Spin />
            </div>
          ) : (
            <Outlet />
          )}
        </Content>
      </Layout>

      <Footer className={styles.footer}>闻人问卷 &copy; 2024 - present. Created by 闻人放歌</Footer>
    </Layout>
  )
}

export default MainLayout
