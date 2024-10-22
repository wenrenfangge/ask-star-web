/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-03 18:58:37
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-08 16:24:32
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Stat/index.tsx
 * @Description: 填写问卷
 */
import { useGetPageInfo } from '@/hooks/useGetPageInfo'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import { Button, Result, Spin } from 'antd'
import React, { FunctionComponent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { StatHeader } from './StatHeader'
import ComponentList from './ComponentList'
import { QuestionComponentTypeEnum } from '@/types/question'
import { StatPage } from './StatPage'

const Stat: FunctionComponent = () => {
  const { loading } = useLoadQuestionData()
  const { isPublished } = useGetPageInfo()
  const navigate = useNavigate()

  const [selectedComponentId, setSelectedComponentId] = useState('')
  const [selectedType, setSelectedType] = useState<QuestionComponentTypeEnum | unknown>('')

  const generateContent = () => {
    if (!isPublished) {
      return (
        <div style={{ flex: 1 }}>
          <Result
            status="404"
            title="403"
            subTitle="抱歉，您访问的问卷尚未发布"
            extra={
              <Button type="primary" onClick={() => navigate(-1)}>
                返回
              </Button>
            }
          />
        </div>
      )
    }
    return (
      <>
        <div className={styles.left}>
          <ComponentList
            selectedComponentId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedType={setSelectedType}
          />
        </div>
        <div className={styles.main}>
          <StatPage
            selectedComponentId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedType={setSelectedType}
          />
        </div>
        <div className={styles.right}></div>
      </>
    )
  }

  const LoadingElem = (
    <div style={{ textAlign: 'center', marginTop: 60 }}>
      <Spin></Spin>
    </div>
  )
  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles['content-wrapper']}>
        {loading && LoadingElem}
        {!loading && <div className={styles.content}>{generateContent()}</div>}
      </div>
    </div>
  )
}

export default Stat
