import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* 路由配置 */}
    </div>
  )
}

export default App
