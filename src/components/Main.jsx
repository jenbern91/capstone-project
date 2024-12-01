import React from 'react'
import '../App.css';
import image1 from './assets/greek-salad.jpg'
import image2 from './assets/bruschetta.png'
import image3 from './assets/lemon-dessert.jpeg'
import { MdOutlineDeliveryDining } from "react-icons/md";

const Main = () => {
  return (
    <div className='main'>
      <div className='stats'>

          <div className='weekly-specials'>
            <h2>This week's specials!</h2>
            <button className='Online Menu'>Online Menu</button>
            </div>

            <div className='flex'>
                <section className='menu'>
                <img src={image1} className='dish-image'></img>
                  <div className='dish-info'>
                    <p className='dish-name'>Greek Salad</p>
                    <p className='dish-price'>$12.99</p>
                  </div>
                  <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                  <p className='delivery'>Order a delivery</p>
                  <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                
                </section>

                <section className='menu'>
                  <img src={image2}  className='dish-image'></img>
                  <div className='dish-info'>
                    <p className='dish-name'>Bruschetta</p>
                    <p className='dish-price'>$6.99</p>
                    </div>
                  <p className='dish-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                
                  <p className='delivery'>Order a delivery</p>
                  <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>

                </section>

                <section className='menu'>
                  <img src={image3}  className='dish-image'></img>
                  <div className='dish-info'>
                    <p className='dish-name'>Lemon Dessert</p>
                    <p className='dish-price'>$5.99</p>
                    </div>
                  <p className='dish-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <p className='delivery'>Order a delivery</p>
                  <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                </section>

          </div>
          </div>
     

      <div className='main-2'><h2 className='testimonial-title'>Testimonials</h2>

          <div className='flex'>
                <section className='testimonial'>
                  <img src='logo.svg' className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Emma T.</p>
                    <p className='rating'>5 Stars</p>
                  </div>
                  <p className='review'>“This place was an absolute gem! The grilled octopus was perfectly tender, and the flavors of the lamb tagine were heavenly. The ambiance truly transported me to the Mediterranean. Highly recommend for a special evening out!” </p>

                </section>
                <section className='testimonial'>
                  <img src='logo.svg' className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Alex R</p>
                    <p className='rating'>5 Stars</p>
                  </div>
                  <p className='review'>“I can’t stop thinking about the baklava! The restaurant has a cozy, authentic vibe with excellent service. Try the mezze platter for a little bit of everything—it’s a game changer.” </p>

                </section>
                <section className='testimonial'>
                  <img src='logo.svg' className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Sofia K.</p>
                    <p className='rating'>5 Stars</p>
                  </div>
                  <p className='review'>“The food was fresh, flavorful, and beautifully presented. I loved the variety of vegetarian options, especially the stuffed grape leaves. A great spot for foodies and Mediterranean cuisine enthusiasts alike!” </p>

                </section>
        </div>
        </div>




    </div>

  )
}

export default Main