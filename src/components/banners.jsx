import React from 'react'
import './banners.css'
import banner1 from '../images/banner1.jpeg'
import banner2 from '../images/banner2.jpeg'
import banner3 from '../images/banner3.jpeg'

export const Banners = () => {
  return (
    <div className='banners'>
        <div className="banner">
            <img src={banner1} alt="" />
            <div className="text">
                <h5>Home</h5>
                <button>Shop now</button>
            </div>
        </div>
        <div className="banner">
            <img src={banner2} alt="" />
            <div className="text">
                <h5>Frozen</h5>
                <button>Shop now</button>
            </div>
        </div>
        <div className="banner">
            <img src={banner3} alt="" />
            <div className="text">
                <h5>Free From Range</h5>
                <button>Shop now</button>
            </div>
        </div>
    </div>
  )
}
