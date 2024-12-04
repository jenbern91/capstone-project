import React from 'react'
import '../App.css';
import image1 from './assets/greek-salad.jpg'
import image2 from './assets/bruschetta.png'
import image3 from './assets/lemon-dessert.jpeg'
import image4 from './assets/Emma.png'
import image5 from './assets/Alex.png'
import image6 from './assets/Sofia.png'
import image7 from './assets/George.png'
import image8 from './assets/restaurant2.jpg'
import { MdOutlineDeliveryDining } from "react-icons/md";

const Main = () => {
  return (
    <div className='container'>
    
          <div className='grid-weekly'>
            <h2 className='weekly-specials'>This week's specials!</h2>
            <button className='online-menu'>Online Menu</button>
            </div>

            <div className='grid-menu'>
                <section className='menu'>
                <img src={image1} className='dish-image'></img>
                  <div className='dish-info'>
                    <p className='dish-name'>Greek Salad</p>
                    <p className='dish-price'>$12.99</p>
                  </div>
                  <p className='dish-description'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                  <div className='delivery'>
                  <p>Order a delivery</p>
                  <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                  </div>
                </section>

                <section className='menu'>
                  <img src={image2}  className='dish-image'></img>
                  <div className='dish-info'>
                    <p className='dish-name'>Bruschetta</p>
                    <p className='dish-price'>$6.99</p>
                    </div>
                  <p className='dish-description'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                  <div className='delivery'>
                  <p>Order a delivery</p>
                  <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                  </div>
                </section>

                <section className='menu'>
                  <img src={image3}  className='dish-image'></img>
                  <div className='dish-info'>
                    <p className='dish-name'>Lemon Dessert</p>
                    <p className='dish-price'>$5.99</p>
                    </div>
                  <p className='dish-description'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                  <div className='delivery'>
                  <p>Order a delivery</p>
                  <div className='delivery-icon'><MdOutlineDeliveryDining size="30px" color='#333333' /> </div>
                  </div>
                  </section>

         
          </div>
     

      <div className='main-2'><h2 className='testimonial-title'>Testimonials</h2>

          <div className='grid-testimonial'>
              
              
                <section className='testimonial'>
                  <img src={image4} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Emma T.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“This place was an absolute gem! The grilled octopus was perfectly tender, and the flavors of the lamb tagine were heavenly. The ambiance truly transported me to the Mediterranean. Highly recommend for a special evening out!” </p>
                    </div>
                    </section>

                <section className='testimonial'>
                  <img src={image5} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Alex R.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“I can’t stop thinking about the baklava! The restaurant has a cozy, authentic vibe with excellent service. Try the mezze platter for a little bit of everything—it’s a game changer.” </p>
                    </div>
                </section>

                <section className='testimonial'>
                  <img src={image6} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Sofia K.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“The food was fresh, flavorful, and beautifully presented. I loved the variety of vegetarian options, especially the stuffed grape leaves. A great spot for foodies and Mediterranean cuisine enthusiasts alike!” </p>
                    </div>
                </section>

                <section className='testimonial'>
                  <img src={image7} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Geroge L.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“This place is a must-visit for anyone who loves Mediterranean food! The grilled lamb chops were cooked to perfection, and the tzatziki had just the right balance of tang and creaminess. It’s the kind of spot where you can relax and enjoy an incredible meal—I’ll definitely be back!” </p>
                    </div>
                </section>
                
        </div>
        </div>

        <div className='our-story'>
          <div className='grid-item-1'>
          <h2>Our Story</h2>
          <img src={image8} className='story-image'></img>
          </div>
          <div className='grid-item-2'>
          <p>Nestled in the vibrant streets of Chicago, Little Lemon was born out of a love for Mediterranean flavors and the timeless tradition of gathering around a shared table.Founded as a family-owned restaurant, we pride ourselves on infusing every dish with the care, warmth, and authenticity that only generations of culinary passion can bring.From the freshest seafood and hand-pressed olive oil to fragrant herbs and spices, every ingredient tells a story of heritage and authenticity. At Little Lemon, we believe food is more than sustenance; it’s a way to connect, celebrate, and create lasting memories. Whether you’re savoring a mezze platter with friends, indulging in a hearty lamb dish, or enjoying a sweet slice of baklava, our goal is to transport you to the Mediterranean shores with every bite. Whether it’s a casual lunch, a romantic dinner, or a celebratory feast, we’re here to make every visit feel like coming home. Come share our passion, taste our story, and experience the magic of the Mediterranean—right here in Chicago. Welcome to Little Lemon.</p>
        </div>
       </div>





    </div>

  )
}

export default Main