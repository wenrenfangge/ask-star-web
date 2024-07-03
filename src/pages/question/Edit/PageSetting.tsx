/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-02 14:01:50
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-02 15:25:46
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/PageSetting.tsx
 * @Description: 页面设置
 */
import { useGetPageInfo } from '@/hooks/useGetPageInfo'
import { resetPageInfo } from '@/store/pageInfoReducer'
import { Form, Input } from 'antd'
import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const PageSetting: FunctionComponent = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const pageInfo = useGetPageInfo()

  useEffect(() => {
    form.setFieldsValue(pageInfo)
  }, [pageInfo])

  const onValuesChangeHandle = () => {
    dispatch(resetPageInfo(form.getFieldsValue()))
  }
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={pageInfo}
      onValuesChange={onValuesChangeHandle}
    >
      <Form.Item name="title" label="问卷标题" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>

      <Form.Item name="desc" label="问卷描述">
        <Input.TextArea placeholder="请输入问卷描述" />
      </Form.Item>

      <Form.Item name="js" label="js脚本">
        <Input.TextArea placeholder="请输入js脚本" />
      </Form.Item>

      <Form.Item name="css" label="css样式">
        <Input.TextArea placeholder="请输入css样式" />
      </Form.Item>
    </Form>
  )
}
