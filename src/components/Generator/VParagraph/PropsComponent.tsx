import React, { FunctionComponent, useEffect } from 'react'
import { VParagraphFormInitialValues, VParagraphPropsType } from './VParagraph'
import { Checkbox, Form, Input } from 'antd'

const rules = {
  text: [{ required: true, message: '请输入文本' }],
  isCenter: [{ required: true, message: '请选择是否居中' }],
}
const { TextArea } = Input

export const PropsComponent: FunctionComponent<VParagraphPropsType> = (
  props: VParagraphPropsType
) => {
  const { text, isCenter, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ text, isCenter })
  }, [text, isCenter])

  const onChangeHandle = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ text, isCenter }}
      onValuesChange={onChangeHandle}
      disabled={disabled}
    >
      <Form.Item
        name={VParagraphFormInitialValues.text.propName}
        label={VParagraphFormInitialValues.text.label}
        rules={rules.text}
      >
        <TextArea placeholder={VParagraphFormInitialValues.text.placeholder} />
      </Form.Item>

      <Form.Item name={VParagraphFormInitialValues.isCenter.propName} valuePropName="checked">
        <Checkbox>{VParagraphFormInitialValues.isCenter.label}</Checkbox>
      </Form.Item>
    </Form>
  )
}
