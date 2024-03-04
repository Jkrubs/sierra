import React from 'react'
import Fruitsdata from './fruitsdata'
import { Fruit } from './fruit'
import './fruits.css'

 const Fruits = () => {
  const fruit=Fruitsdata.map((item)=>{
    return <Fruit image={item.image}
            name={item.name}
            price={item.price}
     />
  })
  return (
    <div className='fruits'>
      <div className="fruit">
        {fruit}
      </div>
    </div>
  )
}

export default Fruits
