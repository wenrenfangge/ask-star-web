import React, { FunctionComponent, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { QuestionCardTypes } from '../../types/question'
import { Typography } from 'antd'

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
]

const { Title } = Typography

const List: FunctionComponent = () => {
  const [questionList] = useState(questionCardList)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>

      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map(item => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>

      <div className={styles.footer}></div>
    </div>
  )
}

export default List
