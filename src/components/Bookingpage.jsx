import React from 'react'
import { useState } from "react";
import Nav from './Nav'
import BookingForm from './BookingForm'
import Footer from './Footer'

import '../App.css'
import '../assets/layouts/Nav.css';
import '../assets/layouts/Footer.css';
import '../assets/layouts/BookingForm.css';


const BookingPage = (props) => {
  return (
    <div>
      <BookingForm 
        availableTimes={props.availableTimes} 
        dispatch={props.dispatch} 
        submitForm={props.submitForm} 
      />
    </div>
  )
}

export default BookingPage