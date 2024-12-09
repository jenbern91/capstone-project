import React from 'react'
import image1 from '../assets/greek-salad.jpg'
import image2 from '../assets/bruschetta.png'
import image3 from '../assets/lemon-dessert.jpeg'
import { MdOutlineDeliveryDining } from "react-icons/md";

const Specials = () => {
  return (

    <div className="specials">
    <div className="special-title">
      <h2 className='weekly-specials'>This week's specials!</h2>
      <button className='online-menu'>Online Menu</button>
    </div>
    <div className="special-1">
    <img src={image1} className='dish-image'></img>
                <div className='dish-info'>
                  <p className='dish-name'>Greek Salad</p>
                  <p className='dish-price'>$12.99</p>
                </div>
                <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <div className='delivery'>
                <a>Order a delivery</a>
                <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                </div>
    </div>
    <div className="special-2">
    <img src={image2}  className='dish-image'></img>
                <div className='dish-info'>
                  <p className='dish-name'>Bruschetta</p>
                  <p className='dish-price'>$6.99</p>
                  </div>
                <p className='dish-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                <div className='delivery'>
                <a>Order a delivery</a>
                <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
    </div>
    </div>
    <div className="special-3">
    <img src={image3}  className='dish-image'></img>
                <div className='dish-info'>
                  <p className='dish-name'>Lemon Dessert</p>
                  <p className='dish-price'>$5.99</p>
                  </div>
                <p className='dish-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className='delivery'>
                <a>Order a delivery</a>
                <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
      </div>
    </div>
  </div>

  )
}

export default Specials