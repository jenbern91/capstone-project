import React from 'react'
import image8 from '../assets/restaurant2.jpg'
import image9 from '../assets/restaurant3.jpg'


const Chicago = () => {
  return (
     <div className='our-story'>
          <div className='title-story'><h2>Our Story</h2></div>
          <div className='story-1'>
          <img src={image9} className='story-image-1'/>
           <img src={image8} className='story-image-2'/> 
          </div>
          <div className='story-2'>
          <p>Nestled in the vibrant streets of Chicago, Little Lemon was born out of a love for Mediterranean flavors and the timeless tradition of gathering around a shared table.
        Founded as a family-owned restaurant, we pride ourselves on infusing every dish with the care, warmth, and authenticity that only generations of culinary passion can bring.From the freshest seafood and hand-pressed olive oil to fragrant herbs and spices, every ingredient tells a story of heritage and authenticity. At Little Lemon, we believe food is more than sustenance; it’s a way to connect, celebrate, and create lasting memories.
            Whether you’re savoring a mezze platter with friends, indulging in a hearty lamb dish, or enjoying a sweet slice of baklava, our goal is to transport you to the Mediterranean shores with every bite. Whether it’s a casual lunch, a romantic dinner, or a celebratory feast, we’re here to make every visit feel like coming home. Come share our passion, taste our story, and experience the magic of the Mediterranean—right here in Chicago. Welcome to Little Lemon.</p>
        </div>
       </div>

 
  )
}

export default Chicago