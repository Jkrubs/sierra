import React from 'react'
import Meatdata from './rabbitrydata'
import './fruits.css'
import { Meat } from './meat'

 const Rabbitry = () => {
  const fruit=Meatdata.map((item)=>{
    return <Meat image={item.image}
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

export default Rabbitry
