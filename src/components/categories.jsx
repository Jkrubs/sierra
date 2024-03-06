import React from 'react'
import './categories.css'
import fruits from '../images/fruits.jpeg'
import vegetables from '../images/vegetables.jpeg'
import bakery from '../images/bakery.jpeg'
import pantry from '../images/pantry.jpeg'
import dairy from '../images/dairy.jpeg'

export const Categories = () => {
  return (
    <div className='categories'>
        <a href="##" class="category">
        <div class="tile">
            <img src={fruits} alt=""/>
            <h5>Fruits</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src={vegetables} alt=""/>
            <h5>Vegetabes</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src={bakery} alt=""/>
            <h5>Bakery</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src={dairy} alt=""/>
            <h5>Dairy</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src={pantry} alt=""/>
            <h5>Pantry</h5>
        </div>
    </a>
    </div>
  )
}
