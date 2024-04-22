import React from 'react'
import './FrameHeader.css'

const FrameHeader = ({subTitle, title}) => {
  return (
    <div className='frameContainer'>
    <div className='frameHeader'>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
    </div>
  )
}

export default FrameHeader
