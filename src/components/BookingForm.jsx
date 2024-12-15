import React, { useState } from 'react';

const BookingForm = ({ availableTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [requests, setRequests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion, requests }); // Pass form data as an object
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (submitForm) {
      const dateObject = new Date(newDate); // Convert string to Date object
      submitForm(dateObject);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="reservation-form">
        <h1 className="res-title">Table Reservation</h1>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

  <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Choose time"
        >
          <option value="">Select a Time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>


        {/* Other form fields */}
        <label htmlFor="guests">No. of Guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="1"
          min="1"
          max="10"
          required
          aria-label="Number of guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-label="Occasion"
        >
          <option value="">Select an Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Graduation">Graduation</option>
          <option value="Engagement">Engagement</option>
          <option value="Others">Others</option>
        </select>

        <label htmlFor="special-requests">Special Requests</label>
        <textarea
          id="special-requests"
          value={requests}
          onChange={(e) => setRequests(e.target.value)}
          placeholder="Any special requests?"
          aria-label="Special requests"
        />

        <button type="submit" className="reserve-button" aria-label="Make your reservation">
          Make your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;