import React, { useReducer } from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import './App.css';

// Define or import availableTimesReducer and initialState
const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Logic to update available times based on the selected date
      return fetchAvailableTimesForDate(action.date);
    default:
      return state;
  }
};

const fetchAvailableTimesForDate = (date) => {
  // Mock function to simulate fetching available times for a given date
  // In a real application, you might fetch this data from an API
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const initializeTimes = () => {
  // Logic to initialize available times
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function App() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialState, initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  const submitForm = (formData) => {
    // Your form submission logic here
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={<BookingPage availableTimes={availableTimes} dispatch={updateTimes} submitForm={submitForm} />} 
        />
      </Routes>
    </>
  );
}

export default App;