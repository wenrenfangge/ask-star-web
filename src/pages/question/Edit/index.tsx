/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-03 18:57:44
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-27 15:34:20
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Edit/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  const { loading } = useLoadQuestionData()
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
