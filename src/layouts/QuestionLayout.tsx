import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FunctionComponent = () => {
  return (
    <div>
      <div>QuestionLayout</div>
      <div>
        <Outlet />
        {/* 子路由将在这里呈现 */}
      </div>
    </div>
  )
}

export default QuestionLayout
