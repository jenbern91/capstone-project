import React from 'react'
import { useState } from 'react'

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [requests, setRequests] = useState("");
    
   const handleSubmit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }
  return (
<>
<form onSubmit={handleSubmit} className='reservation-form'>
    <h1 className='res-title'>Table Reservation</h1>
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date" value={date} onChange={(e)=>handleChange(e.target.value)} required/>
   <label for="res-time">Choose time</label>
   <select id="res-time " value={time} onChange={(e)=>setTime(e.target.value)} required>
   <option value="">Select a Time</option>
   <oprgroup></oprgroup>
    {/* {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})} */}
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1"  id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required/>
   <label for="occasion">Occasion</label>
   <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
   <optgroup>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Graduation</option>
      <option>Anniversary</option>
      <option>Engagment</option>
      <option>Others</option>
    </optgroup>
   </select>
   <label for="special-requests">Special Requests</label>
   <textarea id='special-requests' key={requests} value={requests} onChange={(e) => setRequests(e.target.value)} required></textarea>


   <button type="submit" className='reserve-button' value="">Make you reservation</button>
</form>

</>
  )
}

export default BookingForm