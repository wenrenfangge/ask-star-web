/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-05-30 13:56:11
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-03 15:59:47
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/App.tsx
 * @Description: react入口文件
 */
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* 路由配置 */}
    </div>
  )
}

export default App
