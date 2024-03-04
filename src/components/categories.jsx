import React from 'react'
import './categories.css'

export const Categories = () => {
  return (
    <div className='categories'>
        <a href="##" class="category">
        <div class="tile">
            <img src='/images/fruits.jpeg' alt=""/>
            <h5>Fruits</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src='/images/vegetables.jpeg' alt=""/>
            <h5>Vegetabes</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src='/images/bakery.jpeg' alt=""/>
            <h5>Bakery</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src='/images/dairy.jpeg' alt=""/>
            <h5>Dairy</h5>
        </div>
    </a>

    <a href="##" class="category">
        <div class="tile">
            <img src='/images/pantry.jpeg' alt=""/>
            <h5>Pantry</h5>
        </div>
    </a>
    </div>
  )
}
