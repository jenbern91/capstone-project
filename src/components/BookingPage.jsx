import React from 'react'
import { useState } from "react";
import Nav from './Nav'
import BookingForm from './BookingForm'
import Footer from './Footer'

import '../App.css'
import '../assets/layouts/Nav.css';
import '../assets/layouts/Footer.css';
import '../assets/layouts/BookingForm.css';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div>
      <Nav />
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
         />
      <Footer />
    </div>
  );
};

export default BookingPage