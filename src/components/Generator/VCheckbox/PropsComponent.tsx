/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-30 10:20:48
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 11:49:11
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VCheckbox/PropsComponent.tsx
 * @Description: checkbox面板
 */
import React, { FunctionComponent, useEffect } from 'react'
import { VCheckboxFormInitial, VCheckboxPropsType } from './VCheckbox'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Input, Space, Button, Checkbox, Form } from 'antd'
import { nanoid } from 'nanoid'
import { RuleObject } from 'antd/es/form'

export const PropsComponent: FunctionComponent<VCheckboxPropsType> = (
  props: VCheckboxPropsType
) => {
  const { title, list = [], value, isVertical, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      title,
      list,
      value,
      isVertical,
    })
  }, [title, list, value, isVertical])

  const rules = {
    title: [{ required: true, message: '请输入标题' }],
    options: [
      { required: true, message: '请输入选项' },
      {
        validator: (_: RuleObject, value: string) => {
          const isOnlyOne =
            list.map(item => item.label).filter(label => label === value).length === 1
          if (!isOnlyOne) {
            return Promise.reject(new Error('选项重复了'))
          }
          return Promise.resolve()
        },
      },
    ],
    value: [{ required: true, message: '请输入默认值' }],
    isVertical: [{ required: true, message: '请输入是否垂直' }],
  }

  const onChangeHandle = () => {
    if (!onChange) return
    onChange(form.getFieldsValue())
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        title,
        list,
        value,
        isVertical,
      }}
      onValuesChange={onChangeHandle}
      disabled={disabled}
    >
      <Form.Item
        label={VCheckboxFormInitial.title.label}
        name={VCheckboxFormInitial.title.propName}
        rules={rules.title}
      >
        <Input placeholder={VCheckboxFormInitial.title.placeholder} />
      </Form.Item>

      <Form.Item label={VCheckboxFormInitial.list.label}>
        <Form.List name={VCheckboxFormInitial.list.propName}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => (
                <Space key={key} align="baseline">
                  <Form.Item
                    key={`options-checkbox-${key}`}
                    name={[name, 'isChecked']}
                    valuePropName="checked"
                  >
                    <Checkbox />
                  </Form.Item>
                  <Form.Item key={key} name={[name, 'label']} rules={rules.options}>
                    <Input />
                  </Form.Item>
                  {index > 0 && <MinusCircleOutlined onClick={() => remove(index)} />}
                </Space>
              ))}

              <Button
                type="link"
                icon={<PlusOutlined />}
                onClick={() => {
                  const newOptions = { label: '', value: nanoid(), isChecked: false }
                  add(newOptions)
                }}
                block
              >
                添加选项
              </Button>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item
        label={VCheckboxFormInitial.isVertical.label}
        name={VCheckboxFormInitial.isVertical.propName}
        valuePropName="checked"
      >
        <Checkbox>纵向显示</Checkbox>
      </Form.Item>
    </Form>
  )
}
