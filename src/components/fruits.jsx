import React, { useState } from 'react'
import { Fruit } from './fruit'
import './fruits.css'
import fruit1 from '../images/fruit1.jpeg'
import fruit2 from '../images/fruit2.jpeg'
import fruit3 from '../images/fruit3.jpeg'
import fruit4 from '../images/fruit4.jpeg'
import fruit5 from '../images/fruit5.jpeg'
import fruit6 from '../images/fruit6.jpeg'
import fruit7 from '../images/fruit7.jpeg'
import fruit8 from '../images/fruit8.jpeg'
import fruit9 from '../images/fruit9.jpeg'
import fruit10 from '../images/fruit10.jpeg'
import fruit11 from '../images/fruit11.jpeg'
import fruit12 from '../images/fruit12.jpeg'
import fruit13 from '../images/fruit13.jpeg'
import fruit14 from '../images/fruit14.jpeg'
import fruit15 from '../images/fruit15.jpeg'
import fruit16 from '../images/fruit16.jpeg'
import fruit17 from '../images/fruit17.jpeg'







 const Fruits = () => {
  const [fruits, setFruits]=useState([
    {
      image:fruit1,
      name:"Apples - Crisp Red (Appx.10 Pieces) Per Kg",
      price:499,
      id:"1"
  },
  {
      image:fruit2,
      name:"Apples - Green Granny Smith (Apprx.8 Pieces) Per Kg",
      price:499,
      id:"2"
  },
  {
      image:fruit3,
      name:"Apples - Pink Lady (Apprx. 8 Pieces) Per Kg",
      price:499,
      id:"2"
  },
  {
      image:fruit4,
      name:"Bananas - Kampala (Appx. 6 Pieces) Per Kg ",
      price:89,
      id:"1"
  
  },
  {
      image:fruit5,
      name:"Bananas - Sweet (Appx. 12 Pieces) Per Kg",
      price:219,
      id:"3"
  },
  {
      image:fruit6,
      name:"Bananas - Matoke(Appx. 6 Pieces) Per Kg",
      price:599,
      id:"4"
  },
  {
  
      image:fruit7,
      name:"Passion Fruit - Yellow (Appx. 20 Pieces) Per Kg",
      price:399,
      id:"5"
  },
  {
      image:fruit8,
      name:"Coconut Local(Per Piece)",
      price:100,
      id:"6"
  },
  {
      image:fruit9,
      name:"Cut Jack Fruit",
      price:280,
      id:"7"
  },
  {
      image:fruit10,
      name:"Cut Sugarcane 250g",
      price:150,
      id:"8"
  },
  {
      image:fruit11,
      name:"Avocadoes",
      price:29,
      id:"0"
  
  },
  {
      image:fruit12,
      name:"Dragon Fruit- Red (Appx 2 Pieces) Per Kg",
      price:999,
      id:"10"
  },
  {
      image:fruit13,
      name:"Hass Avocado - (Appx.4 Pieces) Per Kg",
      price:499,
      id:"11"
  },
  {
      image:fruit14,
      name:"Grapefruit (Appx.3 Pieces) Per Kg",
      price:399,
      id:"12"
  },
  {
      image:fruit15,
      name:"Fruit Basket",
      price:1500,
      id:"13"
  },
  {
      image:fruit16,
      name:"Imported Nectarines - (Appx. 7 Pieces) Per Kg",
      price:1299,
      id:"14",
  },
  {
      image:fruit17,
      name:"Imported Peaches - (Appx 5 Pieces) Per Kg",
      price:799,
      id:"15"
  }
  ])
  const fruit=fruits.map((item)=>{
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
