import React from 'react'
import './banners.css'


export const Banners = () => {
  return (
    <div className='banners'>
        <div className="banner">
            <img src='/images/banner1.jpeg' alt="" />
            <div className="text">
                <h5>Home</h5>
                <button>Shop now</button>
            </div>
        </div>
        <div className="banner">
            <img src='/images/banner2.jpeg' alt="" />
            <div className="text">
                <h5>Frozen</h5>
                <button>Shop now</button>
            </div>
        </div>
        <div className="banner">
            <img src='/images/banner3.jpeg' alt="" />
            <div className="text">
                <h5>Free From Range</h5>
                <button>Shop now</button>
            </div>
        </div>
    </div>
  )
}
