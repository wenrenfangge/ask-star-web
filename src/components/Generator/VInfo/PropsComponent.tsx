/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-27 17:12:36
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 09:47:35
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VInfo/PropsComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FunctionComponent } from 'react'
import { VInfoPropsType, VInputFormInitial } from './VInfo'
import { Form, Input, Typography } from 'antd'

const rules = {
  title: [{ required: true, message: '请输入标题' }],
  desc: [{ required: true, message: '请输入描述' }],
}
export const PropsComponent: FunctionComponent<VInfoPropsType> = (props: VInfoPropsType) => {
  const { title, desc, onChange, disabled } = props

  const [form] = Form.useForm()
  const onChangeHandle = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ title, desc }}
      onValuesChange={onChangeHandle}
      disabled={disabled}
    >
      <Form.Item
        name={VInputFormInitial.title.propName}
        label={VInputFormInitial.title.label}
        rules={rules.title}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={VInputFormInitial.desc.propName}
        label={VInputFormInitial.desc.label}
        rules={rules.desc}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}
