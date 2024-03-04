import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="note">
            <h2> Newsletter</h2>
            <p>Join our Newsletter for daily offers and more</p>
            <div>
                <input type="email" placeholder='Email' />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="note">
            <h2>Contacts</h2>
            <h5>22730-11418 KANDUMA PLAZA </h5>
            <p>Kanduma.Nyahururu.Kenya</p>
            <div className='contact'>
                <i class="fa-solid fa-phone"></i>
                <h2>0799715962</h2>
            </div>
        </div>
        <div className="note">
         <h2>Follow us</h2>
        <div className="iconns">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        </div>
    </div>
  )
}
