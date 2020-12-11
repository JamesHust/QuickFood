// Import thư viện React
import React from 'react'
// Import các Compnent
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

// Giao diện trang hiển thị chung
const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
