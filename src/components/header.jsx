import React, { useState } from 'react'
import './header.css'
export const Header = () => {
    const [mobileMenu,setMobileMenu]=useState(true)
    function toggleMenu(){
        setMobileMenu((prevState)=>{return!prevState})
    }
  return (
    <div className='header'>
        <div className='logo'>
            <i onClick={toggleMenu} class="fa-solid fa-bars"></i>
            <img src='/images/logo.jpeg' alt=''/>
        </div>
        <div className={mobileMenu?"submenu":"hidemenu"}>
            <ul>
                <a href="##"><li>Fruits</li></a>
                <a href="##"><li>Vegetables</li></a>
                <a href="##"><li>Cereals</li></a>
                <a href="##"><li>Whole Grains</li></a>
                <a href="##"><li>Frozen Foods</li></a>
                
            </ul>
        </div>
        <select>
            <option>Categories</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Cereals</option>
            <option>Whole Grains</option>
            <option>Frozen Foods</option>
        </select>
        <div className="search">
            <input type="text" placeholder='Search' />
            <button>Search</button>
        </div>
        <div className="icons">
        <a href="##"><i class="fa-regular fa-heart"><div className="counter">0</div></i></a>
        <a href="##"><i class="fa-regular fa-user"></i></a>
        <a href="##"><i class="fa-solid fa-cart-shopping"><div className="counter">0</div></i></a>
        </div>

    </div>
  )
}
