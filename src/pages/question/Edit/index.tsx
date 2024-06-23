import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import React, { FunctionComponent } from 'react'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import EditHeader from './EditHeader'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '@/store/componentsReducer'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPnel'

const Edit: FunctionComponent = () => {
  const { loading, error } = useLoadQuestionData()
  const dispatch = useDispatch()
  const resetSelectedHandle = () => {
    dispatch(changeSelectedId(''))
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <EditHeader />
      </section>
      <section className={styles['content__wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main} onClick={() => resetSelectedHandle()}>
            <div className={styles['canvas__wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Edit
