/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 10:19:38
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-28 10:26:07
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VTextarea/PropsComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FunctionComponent, useEffect } from 'react'
import { VTextareaFormInitial, VTextareaPropsType } from './VTextarea'
import { Form, Input } from 'antd'

const rules = {
  title: [{ required: true, message: '请输入标题' }],
  placeholder: [{ required: true, message: '请输入占位符' }],
}
export const PropsComponent: FunctionComponent<VTextareaPropsType> = (
  props: VTextareaPropsType
) => {
  const { title, placeholder, onChange, disabled } = props
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
      disabled={disabled}
    >
      <Form.Item
        label={VTextareaFormInitial.title.label}
        name={VTextareaFormInitial.title.propName}
        rules={rules.title}
      >
        <Input placeholder={VTextareaFormInitial.title.placeholder} />
      </Form.Item>

      <Form.Item
        label={VTextareaFormInitial.placeholder.label}
        name={VTextareaFormInitial.placeholder.propName}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}
