import React from 'react'
import jp from './jp3.gif'

const Box = ({ children }) => {
  return (
    <div className="box">
      {children === 'jp' ? <img src={jp} /> : children === 'goal' ? '🎈' : null}
    </div>
  )
}

export default Box
