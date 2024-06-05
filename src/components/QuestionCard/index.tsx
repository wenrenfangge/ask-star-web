import React, { FunctionComponent } from 'react'
import styles from './index.module.scss'
import { QuestionCardTypes } from '../../types/question'
import { Button, Space, Divider, Tag, Modal, message } from 'antd'
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

const { confirm } = Modal

const QuestionCard: FunctionComponent<QuestionCardTypes> = (props: QuestionCardTypes) => {
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props
  const navigate = useNavigate()
  const handleAction = (actionName: string) => {
    confirm({
      title: `确定要${actionName}该问卷吗?`,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        message.success('删除问卷')
      },
      onCancel() {
        message.info('取消删除')
      },
    })
  }

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
            <Button
              icon={<StarOutlined />}
              type="text"
              size="small"
              onClick={() => handleAction('标星')}
            >
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button
              icon={<CopyOutlined />}
              type="text"
              size="small"
              onClick={() => handleAction('复制')}
            >
              复制
            </Button>
            <Button
              icon={<DeleteOutlined />}
              type="text"
              size="small"
              onClick={() => handleAction('删除')}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
