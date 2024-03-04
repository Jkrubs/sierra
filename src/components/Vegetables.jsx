import React from 'react'
import './vegetebles.css'
import Vegetabledata from './vegesdata'
import { Vege } from './veg'

export const Vegetables = () => {
  const vege=Vegetabledata.map((item)=>{
    return <Vege image={item.image}
            name={item.name}
            price={item.price}
     />
  })
  return (
    <div className='fruits'>
      <div className="fruit">
        {vege}
      </div>
    </div>
  )
}
