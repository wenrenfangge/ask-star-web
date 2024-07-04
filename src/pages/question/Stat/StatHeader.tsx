/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-07-04 14:23:11
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-04 16:55:56
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/pages/question/Stat/StatHeader.tsx
 * @Description: 统计header
 */
import React, { FunctionComponent, useRef } from 'react'
import styles from './StatHeader.module.scss'
import { Button, Input, InputRef, Popover, QRCode, Space, Typography, message } from 'antd'
import { CopyOutlined, EditOutlined, LeftOutlined, QrcodeOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPageInfo } from '@/hooks/useGetPageInfo'
import { RouterEnum } from '@/router/routerMap'

const { Title } = Typography
export const StatHeader: FunctionComponent = () => {
  const navigate = useNavigate()
  const { title, isPublished } = useGetPageInfo()
  const { id } = useParams()
  const qrLinkRef = useRef<InputRef>(null)

  const copyLink = () => {
    const qrLinkElem = qrLinkRef.current
    if (qrLinkElem == null) {
      return
    }
    qrLinkElem.select()
    navigator.clipboard
      .writeText(qrLinkElem.input?.value || '')
      .then(() => {
        message.success('复制链接成功')
      })
      .catch(() => {
        message.error('复制链接失败')
      })
  }

  const generateLinkQRCodeELem = () => {
    if (!isPublished) {
      return null
    }
    const url = `${process.env.REACT_APP_API_URL}${RouterEnum.QUESTION_STAT}/${id}`
    return (
      <Space>
        <Input value={url} style={{ width: '300px' }} ref={qrLinkRef} />
        <Button type="primary" icon={<CopyOutlined />} onClick={copyLink}></Button>
        <Popover content={<QRCode value={url} />}>
          <Button icon={<QrcodeOutlined />}></Button>
        </Popover>
      </Space>
    )
  }

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
              返回
            </Button>
            <Title>{title}</Title>
          </Space>
        </div>
        <div className={styles.center}>{generateLinkQRCodeELem()}</div>
        <div className={styles.right}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(`${RouterEnum.QUESTION_EDIT}/${id}`)}
          >
            编辑
          </Button>
        </div>
      </div>
    </div>
  )
}
