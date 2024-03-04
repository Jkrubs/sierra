import React from 'react'
import './process.css'

export const Process = () => {
  return (
    <div className='processes'>
        <div className="process">
            <img src='/images/order.jpeg' alt="" />
            <div className="words">
                <h3>BUILD YOUR OWN ORDER</h3>
                <p>Customize your box & set a schedule time for same day or next day <br /> delivery</p>
            </div>
        </div>
        <div className="process">
            <img src='/images/save.jpeg' alt="" />
            <div className="words">
                <h3>SAVE EVEN MORE</h3>
                <p>Shop a variety of products on offer on weekly basis</p>
            </div>
        </div>
        <div className="process">
            <img src='/images/collect.jpeg' alt="" />
            <div className="words">
                <h3>BUILD YOUR OWN ORDER</h3>
                <p>Collect your groceries at your own convenient time or have it delivered</p>
            </div>
        </div>

    </div>
  )
}

