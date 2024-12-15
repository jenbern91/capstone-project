import React, { useReducer, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking'; // Import ConfirmedBooking
import { submitAPI } from './myAPI';
import { initializeTimes, updateTimes } from './components/reservationService';

import './App.css';


const initialState = [];

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

const App = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInitialTimes() {
      const times = await initializeTimes();
      dispatch({ type: 'UPDATE_TIMES', times });
    }
    fetchInitialTimes();
  }, []);

  const handleDateChange = async (selectedDate) => {
    const times = await updateTimes(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', times });
  };

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate('/confirmed-booking');
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} 
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
};

export default App;