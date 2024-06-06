import React, { FunctionComponent, useState } from 'react'
import styles from './common.module.scss'
import { Typography, Empty, Table, Tag, Button, Space, Modal, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import { useLoadQuestionList } from '@/hooks/useLoadQuestionList'

const { Title } = Typography
const { confirm } = Modal

const Trash: FunctionComponent = () => {
  const { list, loading, total } = useLoadQuestionList({ isDeleted: true })
  const [selectedIdsList, setSelectedIdsList] = useState<Array<string>>([])
  const tableColumns = [
    {
      title: '问卷标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (isPublished: boolean) =>
        isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>,
    },
    {
      title: '是否标星',
      dataIndex: 'isStar',
      key: 'isStar',
      render: (isStar: boolean) =>
        isStar ? <Tag color="processing">已标星</Tag> : <Tag>未标星</Tag>,
    },
    {
      title: '答卷数量',
      dataIndex: 'answerCount',
      key: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ]
  const remakeHandle = () => {
    console.log('恢复')
  }
  const deleteHandle = () => {
    confirm({
      title: '确定要删除吗？',
      content: '删除后无法恢复',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        console.log('删除')
      },
    })
  }
  const TableElement = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIdsList.length === 0} onClick={remakeHandle}>
            恢复
          </Button>
          <Button danger disabled={selectedIdsList.length === 0} onClick={deleteHandle}>
            彻底删除
          </Button>
        </Space>
      </div>

      {/* 表格 */}
      <div>
        <Table
          columns={tableColumns}
          dataSource={list}
          pagination={false}
          rowKey={'_id'}
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedIdsList(selectedRowKeys as Array<string>)
            },
          }}
        />
      </div>
    </>
  )
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 && TableElement}
      </div>

      <div className={styles.footer}></div>
      <div className={styles.loading}>{loading && <Spin size="large" />}</div>
    </div>
  )
}

export default Trash
