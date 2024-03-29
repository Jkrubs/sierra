import React from 'react'
import './fruit.css'
export const Fruit = (props) => {


  return (
        <a href="##">
          <div className='fruit' key={props.id}>
        <img src={props.image} alt=''/>
        <div className="iconanimation">
        <i class="fa-regular fa-heart"></i>
        </div>
        <div className="desc">
        <h3>{props.name}</h3>
        <h4>Ksh{props.price} </h4>
        <div className="shop">
            <div className="quants">
                <button>-</button>
                <input type="number" placeholder='0'/>
                <button>+</button>
            </div>
            <i class="fa-solid fa-cart-shopping"></i>
            
        </div>
        
        </div>
    </div>
        </a>
   
  )
}
