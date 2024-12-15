import React, { useReducer, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking'; // Import ConfirmedBooking
import { initializeTimes, updateTimes } from './components/reservationService';

import './App.css';

// Define initial state
const initialState = [];

// Reducer function to update available times based on the selected date
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

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={handleDateChange} />} 
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} /> {/* Add route for ConfirmedBooking */}
      </Routes>
    </>
  );
};

export default App;