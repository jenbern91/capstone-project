import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../App.css'

const ConfirmedBooking = () => {
  return (
    <>
    <Nav />
    <div className='confirmed-booking'>
   <h1>Your booking has been confirmed.</h1>
   <p>You will receive and email from us shortly.</p>
   <p>We Look forward to seeing you!</p>
   </div>
    <Footer />
   </>
   )
}

export default ConfirmedBooking