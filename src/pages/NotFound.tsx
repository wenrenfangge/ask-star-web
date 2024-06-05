import React, { FunctionComponent } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouterEnum } from '../router/routerMap'

const NotFound: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={() => navigate(RouterEnum.MANAGE_LIST)}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
