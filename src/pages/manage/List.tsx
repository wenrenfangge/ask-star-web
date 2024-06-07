import React, { FunctionComponent } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Typography, Spin, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'

import { useLoadQuestionListData } from '@/hooks/useLoadQuestionListData'

const { Title } = Typography

const List: FunctionComponent = () => {
  const { list, loading, total } = useLoadQuestionListData()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {!loading &&
          list.length > 0 &&
          list.map(item => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>

      <div className={styles.footer}></div>
      <div className={styles.loading}>{loading && <Spin size="large" />}</div>
    </div>
  )
}

export default List
