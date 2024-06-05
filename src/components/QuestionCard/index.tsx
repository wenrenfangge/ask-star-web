import React, { FunctionComponent } from 'react'
import styles from './index.module.scss'
import { QuestionCardTypes } from '../../types/question'
import { Button, Space, Divider, Tag } from 'antd'
import { Link } from 'react-router-dom'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { RouterEnum } from '../../router/routerMap'

const QuestionCard: FunctionComponent<QuestionCardTypes> = (props: QuestionCardTypes) => {
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props
  console.log(_id, isStar)
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Link
            to={
              isPublished
                ? `${RouterEnum.QUESTION_STAT}/${_id}`
                : `${RouterEnum.QUESTION_EDIT}/${_id}`
            }
          >
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.info}>
          <Space>
            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles.content}>
        <div className={styles['left-content']}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => navigate(`${RouterEnum.QUESTION_EDIT}/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => navigate(`${RouterEnum.QUESTION_STAT}/${_id}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles['right-content']}>
          <Space>
            <Button icon={<StarOutlined />} type="text" size="small">
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button icon={<CopyOutlined />} type="text" size="small">
              复制
            </Button>
            <Button icon={<DeleteOutlined />} type="text" size="small">
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
