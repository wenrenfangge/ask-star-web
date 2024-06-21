import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import React, { FunctionComponent } from 'react'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import EditHeader from './EditHeader'

const Edit: FunctionComponent = () => {
  const { loading, error } = useLoadQuestionData()

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <EditHeader />
      </section>
      <section className={styles['content__wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.main}>
            <div className={styles['canvas__wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </section>
    </div>
  )
}

export default Edit
