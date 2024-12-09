import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>


  </>
  )
}

export default App
