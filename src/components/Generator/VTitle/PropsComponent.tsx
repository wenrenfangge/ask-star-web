import React, { FunctionComponent, useEffect } from 'react'
import { VTitleFormInitial, VTitlePropsType } from './VTitle'
import { Checkbox, Form, Input, Select } from 'antd'

const rules = {
  text: [{ required: true, message: '请输入标题' }],
  level: [{ required: true, message: '请选择标题等级' }],
  isCenter: [{ required: true, message: '请选择标题是否居中' }],
}
export const PropsComponent: FunctionComponent<VTitlePropsType> = (props: VTitlePropsType) => {
  const { text, level, isCenter, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ text, level, isCenter })
  }, [text, level, isCenter])

  const onChangeHandle = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ text, level, isCenter }}
      onChange={onChangeHandle}
      disabled={disabled}
    >
      <Form.Item
        name={VTitleFormInitial.text.propName}
        label={VTitleFormInitial.text.label}
        rules={rules.text}
      >
        <Input placeholder={VTitleFormInitial.text.placeholder} />
      </Form.Item>

      <Form.Item name={VTitleFormInitial.level.propName} label={VTitleFormInitial.level.label}>
        <Select options={VTitleFormInitial.level.options}></Select>
      </Form.Item>

      <Form.Item name={VTitleFormInitial.isCenter.propName} valuePropName="checked">
        <Checkbox>{VTitleFormInitial.isCenter.label}</Checkbox>
      </Form.Item>
    </Form>
  )
}
