import React from 'react'
import image4 from  '../assets/Emma.png'
import image5 from '../assets/Alex.png'
import image6 from '../assets/Sofia.png'
import image7 from '../assets/George.png'



const CustomersSay = () => {
  return (
    <div className='customers-say'>
      <h2 className='customers-title'>Testimonials</h2>
        <div className='grid-testimonial'>
        <section className='testimonial-1'>
                  <img src={image4} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Emma T.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“This place was an absolute gem! The grilled octopus was perfectly tender, and the flavors of the lamb tagine were heavenly. The ambiance truly transported me to the Mediterranean. Highly recommend for a special evening out!” </p>
                    </div>
        </section>

        <section className='testimonial-2'>
                  <img src={image5} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Alex R.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“I can’t stop thinking about the baklava! The restaurant has a cozy, authentic vibe with excellent service. Try the mezze platter for a little bit of everything—it’s a game changer.” </p>
                    </div>
        </section>

          <section className='testimonial-3'>
                  <img src={image6} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Sofia K.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“The food was fresh, flavorful, and beautifully presented. I loved the variety of vegetarian options, especially the stuffed grape leaves. A great spot for foodies and Mediterranean cuisine enthusiasts alike!” </p>
                    </div>
          </section>

          <section className='testimonial-4'>
                  <img src={image7} className='person-image'></img>
                  <div className='review'>
                    <p className='person-name'>Geroge L.</p>
                    <p className='rating'>⭐⭐⭐⭐⭐</p>
                    <p className='review'>“This place is a must-visit for anyone who loves Mediterranean food! The grilled lamb chops were cooked to perfection, and the tzatziki had just the right balance of tang and creaminess. It’s the kind of spot where you can relax and enjoy an incredible meal—I’ll definitely be back!” </p>
                    </div>
          </section>

        </div>


  </div>
  )
}

export default CustomersSay