import React from 'react'
import './hero.css'
export const Hero = () => {
  return (
    <div className='about'>
        <div className="cards">
        <div className="card">
          <div >
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          <div id='1' className="text">
            <h4>Delivery</h4>
            <h5>Same Day Delivery</h5>
          </div>
        </div>
        <div className="card">
          <div >
          <i class="fa-solid fa-bullhorn"></i>
          </div>
          <div id='text2' className="text">
            <h4>Daily Promotions</h4>
            <h5>Everyday Low Prices</h5>
          </div>
        </div>
        <div className="card">
          <div >
          <i class="fa-solid fa-clock-rotate-left"></i>
          </div>
          <div id='text3' className="text">
            <h4>Open Everyday</h4>
            <h5>Order Any Time</h5>
          </div>
        </div>
        <div className="card">
          <div >
          <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <div id='text4' className="text">
            <h4>Payment</h4>
            <h5>Easy Payment Options</h5>
          </div>
        </div>
        </div>
    </div>
  )
}
