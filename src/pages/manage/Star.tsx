import React, { FunctionComponent } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Typography, Empty, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import { useLoadQuestionList } from '@/hooks/useLoadQuestionList'
const { Title } = Typography

const Star: FunctionComponent = () => {
  const { list, loading, total } = useLoadQuestionList({ isStar: true })
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
        {!loading && list.length === 0 && <Empty description="暂无星标问卷" />}
        {!loading &&
          list.length > 0 &&
          list.map(item => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>

      <div className={styles.footer}>分页</div>
      <div className={styles.loading}>{loading && <Spin size="large" />}</div>
    </div>
  )
}

export default Star
