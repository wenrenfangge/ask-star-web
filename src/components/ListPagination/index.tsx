import { DEFAULT_PAGE_SIZE, LIST_SEARCH_PAGE_KEY, LIST_SEARCH_PAGE_SIZE_KEY } from '@/constant'
import { PaginationType } from '@/types/axios'
import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const ListPagination = (props: Partial<PaginationType>) => {
  const { total } = props
  const [current, setCurrent] = useState(0)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    searchParams.get(LIST_SEARCH_PAGE_KEY) &&
      setCurrent(parseInt(searchParams.get(LIST_SEARCH_PAGE_KEY) || '') || 1)
    searchParams.get(LIST_SEARCH_PAGE_SIZE_KEY) &&
      setPageSize(parseInt(searchParams.get(LIST_SEARCH_PAGE_SIZE_KEY) || '') || DEFAULT_PAGE_SIZE)
  }, [searchParams])
  const PaginationChangeHandle = (page: number, pageSize: number) => {
    searchParams.set(LIST_SEARCH_PAGE_KEY, page.toString())
    searchParams.set(LIST_SEARCH_PAGE_SIZE_KEY, pageSize.toString())
    navigate({
      pathname,
      search: searchParams.toString(),
    })
  }
  // ...
  return (
    <div>
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        showSizeChanger
        onChange={PaginationChangeHandle}
      />
    </div>
  )
}

export default ListPagination
