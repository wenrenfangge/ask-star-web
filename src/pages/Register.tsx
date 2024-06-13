import React, { FunctionComponent } from 'react'
import { Typography, Space, Form, Input, Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { RouterEnum } from '@/router/routerMap'
import { LoginType } from '@/types/Login'
import { useRequest } from 'ahooks'
import { register } from '@/api/user'

const { Title } = Typography

const Register: FunctionComponent = () => {
  const nav = useNavigate()
  const { run: registerHandle } = useRequest((values: LoginType) => register(values), {
    manual: true,
    onSuccess: () => {
      nav(RouterEnum.LOGIN)
    },
    onError: error => {
      console.log(error)
    },
  })
  const onFinish = (values: LoginType) => {
    registerHandle(values)
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20, message: '用户名长度在5到20之间' },
              { pattern: /^[a-zA-Z0-9_-]+$/, message: '用户名只能包含字母、数字、下划线、中划线' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '请再次输入密码' },
              // 校验两次输入的密码是否一致
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'))
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: false, message: '请输入昵称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={RouterEnum.LOGIN}>已有账号?直接登陆</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
