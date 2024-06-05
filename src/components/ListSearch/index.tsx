import React, { FunctionComponent, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PRIMARY_KEY } from '../../constant'

const { Search } = Input

const ListSearch: FunctionComponent = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const newParams = searchParams.get(LIST_SEARCH_PRIMARY_KEY) || ''
    setValue(newParams)
  }, [searchParams])
  const handleSearch = (value: string) => {
    navigate({
      pathname: pathname,
      search: `${LIST_SEARCH_PRIMARY_KEY}=${value}`,
    })
  }
  return (
    <Search
      placeholder="输入关键字"
      onSearch={handleSearch}
      enterButton
      allowClear
      value={value}
      onChange={e => setValue(e.target.value)}
      style={{ width: 260 }}
    ></Search>
  )
}

export default ListSearch
