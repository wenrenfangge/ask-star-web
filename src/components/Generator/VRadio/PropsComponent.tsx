/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-28 16:09:09
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 10:38:02
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/VRadio/PropsComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FunctionComponent, useEffect } from 'react'
import { VRadioFormInitial, VRadioPropsType } from './VRadio'
import { Button, Checkbox, Form, Input, Select, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { nanoid } from 'nanoid'
import { RuleObject } from 'antd/es/form'

export const PropsComponent: FunctionComponent<VRadioPropsType> = (props: VRadioPropsType) => {
  const { title, options = [], value, isVertical, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      title,
      options,
      value,
      isVertical,
    })
  }, [title, options, value, isVertical])

  const rules = {
    title: [{ required: true, message: '请输入标题' }],
    options: [
      { required: true, message: '请输入选项' },
      {
        validator: (_: RuleObject, value: string) => {
          const isOnlyOne =
            options.map(item => item.label).filter(label => label === value).length === 1
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
        options,
        value,
        isVertical,
      }}
      onValuesChange={onChangeHandle}
      disabled={disabled}
    >
      <Form.Item
        label={VRadioFormInitial.title.label}
        name={VRadioFormInitial.title.propName}
        rules={rules.title}
      >
        <Input placeholder={VRadioFormInitial.title.placeholder} />
      </Form.Item>

      <Form.Item label={VRadioFormInitial.options.label} name={VRadioFormInitial.options.propName}>
        <Form.List name={VRadioFormInitial.options.propName}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => (
                <Space key={key} align="baseline">
                  <Form.Item key={key} name={[name, 'label']} rules={rules.options}>
                    <Input />
                  </Form.Item>
                  {index > 1 && <MinusCircleOutlined onClick={() => remove(index)} />}
                </Space>
              ))}

              <Button
                type="link"
                icon={<PlusOutlined />}
                onClick={() => {
                  const newOptions = { label: '', value: nanoid() }
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

      <Form.Item label={VRadioFormInitial.value.label} name={VRadioFormInitial.value.propName}>
        <Select
          allowClear
          options={options.map(item => ({ label: item.label, value: item.value || '' }))}
        ></Select>
      </Form.Item>

      <Form.Item
        label={VRadioFormInitial.isVertical.label}
        name={VRadioFormInitial.isVertical.propName}
        valuePropName="checked"
      >
        <Checkbox>纵向显示</Checkbox>
      </Form.Item>
    </Form>
  )
}
