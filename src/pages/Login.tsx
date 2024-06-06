import React, { FunctionComponent, useEffect } from 'react'
import styles from './Login.module.scss'
import { Space, Button, Input, Form, Checkbox, Typography, notification } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { RouterEnum } from '@/router/routerMap'
import { LoginType } from '@/types/Login'
import { LOGIN_ACCOUNT_TYPE } from '@/constant'

const { Title } = Typography

const Login: FunctionComponent = () => {
  const [form] = Form.useForm()
  useEffect(() => {
    getAccount() && form.setFieldsValue(getAccount())
  }, [])
  const onFinishhandle = (values: LoginType) => {
    const { username, password, remember } = values || {}
    if (!username || !password) {
      notification.error({
        message: '登录失败',
        description: '用户名或密码不能为空',
      })
      return
    }
    if (remember) {
      rememberAccount(values)
    } else {
      forgetAccount()
    }
  }
  const onFinishFaildhandle = () => {
    // 登录失败逻辑
  }
  const rememberAccount = (data: LoginType) => {
    localStorage.setItem(LOGIN_ACCOUNT_TYPE.USERNAME, data.username)
    localStorage.setItem(LOGIN_ACCOUNT_TYPE.PASSWORD, data.password)
  }
  const forgetAccount = () => {
    localStorage.removeItem(LOGIN_ACCOUNT_TYPE.USERNAME)
    localStorage.removeItem(LOGIN_ACCOUNT_TYPE.PASSWORD)
  }
  const getAccount = () => {
    return {
      username: localStorage.getItem(LOGIN_ACCOUNT_TYPE.USERNAME),
      password: localStorage.getItem(LOGIN_ACCOUNT_TYPE.PASSWORD),
    }
  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title>
            <UserOutlined />
          </Title>
          <Title>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinishhandle}
          onFinishFailed={onFinishFaildhandle}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20, message: '用户名长度在5到20之间' },
              { pattern: /^[a-zA-Z0-9_-]+$/, message: '用户名只能包含字母、数字、下划线、中划线' },
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }} name={'remember'} valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={RouterEnum.REGISTER}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
