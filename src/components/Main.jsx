import React from 'react'
import '../App.css';
import image1 from './assets/greek-salad.jpg'
import image2 from './assets/bruschetta.png'
import image3 from './assets/lemon-dessert.jpeg'
import { MdOutlineDeliveryDining } from "react-icons/md";

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='grid'>
          <div className='weekly-specials'>
            <h2>This Week's Specials</h2>
            <button className='Online Menu'>Online Menu</button>
                <section className='menu-1'>
                  <img src={image1}></img>
                  <p className='dish-name'>Greek Salad</p>
                  <p className='dish-price'>$12.99</p>
                  <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                  <p className='delivery'>Order a delivery</p>
                  <div><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                
                </section>

                <section className='menu-2'>
                  <img src={image2}></img>
                  <p className='dish-name'>Bruschetta</p>
                  <p className='dish-price'>$6.99</p>
                  <p className='dish-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                  <p className='delivery'>Order a delivery</p>
                  <div><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>

                </section>

                <section className='menu-2'>
                  <img src={image3}></img>
                  <p className='dish-name'>Lemon Dessert</p>
                  <p className='dish-price'>$5.99</p>
                  <p className='dish-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <p className='delivery'>Order a delivery</p>
                  <div><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                </section>

          </div>
          <div className='testimonials'></div>

          </div>
      </div>
    </div>
  )
}

export default Main