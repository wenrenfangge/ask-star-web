import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Typography, Spin, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'
import { useInViewport, useRequest } from 'ahooks'
import { getQuestionList } from '@/api/question'
import { useSearchParams } from 'react-router-dom'
import { DEFAULT_PAGE_SIZE, LIST_SEARCH_PRIMARY_KEY } from '@/constant'
import { ResponseDataType } from '@/types/axios'
import { QuestionCardTypes } from '@/types/question'

const { Title } = Typography

const List: FunctionComponent = () => {
  const [SearchParams] = useSearchParams()
  const loadMoreRef = useRef(null)
  const [inViewport] = useInViewport(loadMoreRef)
  const [list, setList] = useState<QuestionCardTypes[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const keyword = SearchParams.get(LIST_SEARCH_PRIMARY_KEY) || ''
  const hasMoreData = list.length < total
  // 监听搜索参数变化
  useEffect(() => {
    loadListData()
  }, [SearchParams])
  // 监听是否滑动到底
  useEffect(() => {
    if (hasMoreData && inViewport) {
      loadListData()
    }
  }, [inViewport, hasMoreData])
  // 监听搜索参数变化
  useEffect(() => {
    setPage(1)
    setList([])
    setTotal(0)
  }, [keyword])
  // 获取问卷列表数据
  const { loading, run: loadListData } = useRequest(
    () => getQuestionList({ page: page, pageSize: DEFAULT_PAGE_SIZE, keyword: keyword }),
    {
      manual: true,
      refreshDeps: [page],
      onSuccess: (res: ResponseDataType<QuestionCardTypes>) => {
        const { list: listData = [], total = 0 } = res
        setList(list.concat(listData))
        setPage(page + 1)
        setTotal(total)
      },
    }
  )
  const loadMoreElement = () => {
    if (loading) {
      return <Spin size="small" />
    }
    if (hasMoreData) {
      return <span>下滑加载更多</span>
    }
    if (list.length === 0) {
      return <Empty description="暂无数据" />
    }
    return <span>没有更多数据了</span>
  }
  // 删除问卷
  const deleteSuccess = () => {
    if (list.length <= 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
    loadListData()
  }
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
        {list.length > 0 &&
          list.map(item => {
            return <QuestionCard key={item._id} {...item} deleteSuccess={deleteSuccess} />
          })}
      </div>

      <div className={styles.footer}>
        <div ref={loadMoreRef}>{loadMoreElement()}</div>
      </div>
    </div>
  )
}

export default List
