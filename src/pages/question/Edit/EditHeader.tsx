import React, { FunctionComponent } from 'react'
import styles from './EditHeader.module.scss'

const EditHeader: FunctionComponent = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-content']}>
        <div className={styles.left}></div>
        <div className={styles.main}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default EditHeader
