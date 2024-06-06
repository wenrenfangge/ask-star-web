import React, { FunctionComponent } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button, Space, Divider, notification } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { createQuestion } from '@/api/question'
import { RouterEnum } from '@/router/routerMap'
import { useRequest } from 'ahooks'

const ManageLayout: FunctionComponent = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const {
    data,
    loading,
    run: handleCreateQuestion,
  } = useRequest(createQuestion, {
    manual: true,
    onSuccess: res => {
      const { id } = res || {}
      if (id) {
        navigate(`${RouterEnum.QUESTION_EDIT}/${id}`)
        notification.success({
          message: '创建成功',
          description: '问卷创建成功，请继续编辑',
          duration: 3,
        })
      }
    },
  })
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            loading={loading}
            onClick={handleCreateQuestion}
          >
            创建问卷
          </Button>
          <Divider style={{ borderTop: 'transparent' }} />
          <Button
            type={pathname.startsWith(RouterEnum.MANAGE_LIST) ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => navigate(RouterEnum.MANAGE_LIST)}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith(RouterEnum.MANAGE_STAR) ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => navigate(RouterEnum.MANAGE_STAR)}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith(RouterEnum.MANAGE_TRASH) ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => navigate(RouterEnum.MANAGE_TRASH)}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
        {/* 子路由将在这里呈现 */}
      </div>
    </div>
  )
}

export default ManageLayout
