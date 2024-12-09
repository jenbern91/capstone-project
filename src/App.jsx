import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = (date) => {
    // Your dispatch logic here
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
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} 
        />
      </Routes>
    </>
  );
}

export default App;