/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-08 14:41:02
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-09 13:45:33
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Stat/StatPage.tsx
 * @Description: stat page页面
 */
import { getQuestionStatList } from '@/api/stat'
import { useGetComponentInfo } from '@/hooks/useGetComponentInfo'
import { ResponseDataType } from '@/types/axios'
import {
  StatComponentListPropType,
  StatComponentListTableListItemType,
  StatComponentListTableListType,
} from '@/types/question/stat'
import { useRequest } from 'ahooks'
import { Spin, Table } from 'antd'
import React, { FunctionComponent, useState } from 'react'
import { useParams } from 'react-router-dom'

export const StatPage: FunctionComponent<StatComponentListPropType> = (
  props: StatComponentListPropType
) => {
  const { selectedComponentId, setSelectedComponentId, setSelectedType } = props
  const { id: _id = '' } = useParams()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [list, setList] = useState<StatComponentListTableListType>([])
  const [total, setTotal] = useState(0)

  const { loading } = useRequest(() => getQuestionStatList({ _id, page, pageSize }), {
    onSuccess: data => {
      const { total, list = [] } =
        data as unknown as ResponseDataType<StatComponentListTableListItemType>
      console.log('list:', list)
      setList(list)
      setTotal(total)
    },
  })

  const { componentList } = useGetComponentInfo()

  const columns = componentList.map(item => {
    const { fe_id, props, title, type } = item

    const tableTitleElem = (
      <div
        style={{
          color: fe_id === selectedComponentId ? '#1890ff' : 'inherit',
          cursor: 'pointer',
        }}
        onClick={() => {
          setSelectedComponentId(fe_id)
          setSelectedType(type)
        }}
      >
        {props.title || title}
      </div>
    )

    return {
      title: tableTitleElem,
      dataIndex: fe_id,
      key: fe_id,
    }
  })
  const dataSource = list.map((item: StatComponentListTableListItemType) => {
    return {
      ...item,
      key: item.fe_id,
    }
  })
  console.log('dataSource:', dataSource, 'list: ', list)
  const tableElem = <Table columns={columns} dataSource={dataSource}></Table>
  return (
    <>
      {loading && <Spin style={{ textAlign: 'center', margin: '60px' }} />}
      <div>问卷数量：{total}</div>
      {tableElem}
    </>
  )
}
