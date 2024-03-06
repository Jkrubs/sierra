import React, { useState } from 'react'
import './vegetebles.css'
import { Vege } from './veg'
import veg1 from '../images/veg1.jpeg'
import veg2 from '../images/veg2.jpeg'
import veg3 from '../images/veg3.jpeg'
import veg4 from '../images/veg4.jpeg'
import veg5 from '../images/veg5.jpeg'
import veg6 from '../images/veg6.jpeg'
import veg7 from '../images/veg7.jpeg'
import veg8 from '../images/veg8.jpeg'
import veg9 from '../images/veg9.jpeg'
import veg10 from '../images/veg10.jpeg'
import veg11 from '../images/veg11.jpeg'
import veg12 from '../images/veg12.jpeg'
import veg13 from '../images/veg13.jpeg'
import veg15 from '../images/veg15.jpeg'
import veg16 from '../images/veg16.jpeg'

export const Vegetables = () => {
  const[vegetable, setVegetabe]=useState([
    {
      image:veg1,
      name:"Broccoli (Appx.3 Heads) Per Kg.",
      price:"299"

  },
  {
      image:veg2,
      name:"Red Cabbage - (Appx. 1 Head) Per Kg",
      price:"169"

  }, {
      image:veg3,
      name:"Chinese Cabbage - 1 Piece Appx. 1.5kgs",
      price:"109"

  }, {
      image:veg4,
      name:"Yellow Bell Peppers (Appx. 6 Pieces) Per Kg",
      price:"219"

  }, {
      image:veg5,
      name:"Royal Carribean Chillies Per Kg",
      price:"399"

  }, {
      image:veg6,
      name:"Sukuma Wiki (Collard Greens) Per Bunch",
      price:"39"

  }, {
      image:veg7,
      name:"Zucchini/Baby Marrow/Courgettes (Appx.6 Pieces) Per Kg",
      price:"129"

  }, {
      image:veg8,
      name:"Spinach Local (Swiss Chard) Per Bunch",
      price:"39"

  }, {
      image:veg9,
      name:"White Cabbage - (Appx. 1.5 Head) Per Kg",
      price:"39"

  }, {
      image:veg10,
      name:"Tomato - Italian (Appx. 8 Pieces) Per Kg",
      price:"79"

  }, {
      image:veg11,
      name:"White Onions - (Appx. 10 Pieces) Per Kg",
      price:"219"

  }, {
      image:veg12,
      name:"White Potatoes - (Appx.5 Pieces) Per Kg",
      price:"129"

  }, {
      image:veg13,
      name:"Red Alika Potatoes - (Appx.5 Pieces) Per Kg ",
      price:"219"

  }, 

   {
      image:veg15,
      name:"Sweet Potato - Local (Appx.2 Pieces) Per Kg",
      price:"159"

  }, {
      image:veg16,
      name:"Dhania (Cilantro) Per Bunch",
      price:"29"

  }
  ])
  const vege=vegetable.map((item)=>{
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
