import useLoadUserInfoData from '@/hooks/useLoadUserInfoData'
import { useNavPage } from '@/hooks/useNavPage'
import { Layout, Spin } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FunctionComponent = () => {
  const { waitingUserData } = useLoadUserInfoData()
  useNavPage(waitingUserData)
  return (
    <div style={{ height: '100vh' }}>
      <Layout>
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
    </div>
  )
}

export default QuestionLayout
