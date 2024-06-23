import React, { FunctionComponent, useEffect } from 'react'
import { VInputFormInitial, VInputPropsType } from './VInput'
import { Form, Input } from 'antd'

const rules = {
  title: [{ required: true, message: '请输入标题' }],
  placeholder: [{ required: true, message: '请输入占位符' }],
}
export const PropsComponent: FunctionComponent<VInputPropsType> = (props: VInputPropsType) => {
  const { title, placeholder, onChange } = props
  const [form] = Form.useForm()
  useEffect(() => {
    // 初始化表单
    form.setFieldsValue({
      title,
      placeholder,
    })
  }, [title, placeholder])

  const onChangeHandle = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{
        title,
        placeholder,
      }}
      onValuesChange={onChangeHandle}
    >
      <Form.Item
        label={VInputFormInitial.title.label}
        name={VInputFormInitial.title.propName}
        rules={rules.title}
      >
        <Input placeholder={VInputFormInitial.title.placeholder} />
      </Form.Item>

      <Form.Item
        label={VInputFormInitial.placeholder.label}
        name={VInputFormInitial.placeholder.propName}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}
