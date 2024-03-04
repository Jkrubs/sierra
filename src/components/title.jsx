import React from 'react'
import './title.css'

export const Title = (props) => {
  return (
    <div className='title'>
        <h2>{props.name}</h2>
        <div className="title-icons">
        <i class="fa-solid fa-angle-left"></i>
        <i class="fa-solid fa-angle-right"></i>
        </div>
    </div>
  )
}
