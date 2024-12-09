import { useState } from 'react'
import { Route, Routes } from "react-router-dom"

import Homepage from './components/Homepage'
import Bookingpage from './components/Bookingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/booking" element={<Bookingpage />}></Route>
</Routes>


  </>
  )
}

export default App
