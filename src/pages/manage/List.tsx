import React, { FunctionComponent } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { QuestionCardTypes } from '../../types/question'

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

const List: FunctionComponent = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.content}>
        {questionCardList.length > 0 &&
          questionCardList.map(item => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>

      <div className={styles.footer}></div>
    </div>
  )
}

export default List
