import React, { FunctionComponent } from 'react'
import styles from './EditHeader.module.scss'
import { Button, Space, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { EditToolBar } from './EditToolBar'

const { Title } = Typography
const EditHeader: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-content']}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
              返回
            </Button>
            <Title>问卷标题</Title>
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolBar />
        </div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
