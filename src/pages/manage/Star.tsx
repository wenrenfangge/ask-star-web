import React, { FunctionComponent, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { QuestionCardTypes } from '../../types/question'
import { Typography, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'

const questionCardList: Array<QuestionCardTypes> = [
  {
    _id: '1',
    title: '问卷1',
    isStar: true,
    isPublished: true,
    answerCount: 4,
    createdAt: '2024-05-11 12:00:00',
  },
  {
    _id: '2',
    title: '问卷2',
    isStar: true,
    isPublished: true,
    answerCount: 4,
    createdAt: '2024-05-11 12:00:00',
  },
  {
    _id: '3',
    title: '问卷3',
    isStar: true,
    isPublished: true,
    answerCount: 4,
    createdAt: '2024-05-11 12:00:00',
  },
  {
    _id: '4',
    title: '问卷4',
    isStar: true,
    isPublished: true,
    answerCount: 4,
    createdAt: '2024-05-11 12:00:00',
  },
]
const { Title } = Typography

const Star: FunctionComponent = () => {
  const [starQuestionList] = useState(questionCardList)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {starQuestionList.length === 0 && <Empty description="暂无星标问卷" />}
        {starQuestionList.length > 0 &&
          starQuestionList.map(item => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>

      <div className={styles.footer}>分页</div>
    </div>
  )
}

export default Star
