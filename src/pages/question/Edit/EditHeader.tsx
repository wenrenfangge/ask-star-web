/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 13:47:54
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 10:26:18
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/EditHeader.tsx
 * @Description: 标题组件
 */
import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import styles from './EditHeader.module.scss'
import { Button, Input, Space, Typography, message } from 'antd'
import { CheckOutlined, EditOutlined, LeftOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { EditToolBar } from './EditToolBar'
import { useGetPageInfo } from '@/hooks/useGetPageInfo'
import { useDispatch } from 'react-redux'
import { changePageTitle } from '@/store/pageInfoReducer'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import { useKeyPress, useRequest } from 'ahooks'
import { updateQuestion } from '@/api/question'
import { QuestionUpdateRequest } from '@/types/question'
import { RouterEnum } from '@/router/routerMap'

const { Title } = Typography

const EditTitle: FunctionComponent = () => {
  const [isEditTitle, setIsEditTitle] = useState(false)
  const { title } = useGetPageInfo()
  const dispatch = useDispatch()

  const onTitleChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePageTitle({ title: event.target.value.trim() }))
  }
  if (isEditTitle) {
    return (
      <Input
        value={title}
        onPressEnter={() => setIsEditTitle(false)}
        onBlur={() => setIsEditTitle(false)}
        onChange={onTitleChangeHandle}
      />
    )
  } else
    return (
      <Space>
        <Title>{title}</Title>
        <Button icon={<EditOutlined />} type="text" onClick={() => setIsEditTitle(true)}></Button>
      </Space>
    )
}

const SavePage: FunctionComponent = () => {
  const { id: _id } = useParams()
  const { componentList = [] } = useGetComponentInfo()
  const pageInfo = useGetPageInfo()

  const data = {
    _id,
    componentList,
    ...pageInfo,
  } as QuestionUpdateRequest
  const { run, loading } = useRequest(
    async () => {
      if (!_id) {
        return
      }
      await updateQuestion(data)
    },
    {
      manual: true,
    }
  )
  useKeyPress(['ctrl.s', 'meta.s'], event => {
    event.preventDefault()
    if (loading) {
      return
    }
    run()
  })

  return (
    <Button onClick={run} loading={loading} disabled={loading} icon={<CheckOutlined />}>
      保存
    </Button>
  )
}

const PublishPage: FunctionComponent = () => {
  const { id: _id } = useParams()
  const { componentList = [] } = useGetComponentInfo()
  const pageInfo = useGetPageInfo()
  const navigate = useNavigate()

  const data = {
    _id,
    componentList,
    ...pageInfo,
    isPublished: true,
  } as QuestionUpdateRequest
  const { run, loading } = useRequest(
    async () => {
      if (!_id) {
        return
      }
      await updateQuestion(data)
    },
    {
      manual: true,
      onSuccess: () => {
        message.success('发布成功')
        navigate(`${RouterEnum.QUESTION_STAT}/${_id}`)
      },
    }
  )

  return (
    <Button type="primary" onClick={run} loading={loading} disabled={loading}>
      发布
    </Button>
  )
}

const EditHeader: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-content']}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
              返回
            </Button>
            <EditTitle />
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolBar />
        </div>
        <div className={styles.right}>
          <Space>
            <SavePage />
            <PublishPage />
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
