import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import Trip from './Component/Trip'
import Flight from './Component/Flight'
import Activity from './Component/Activity'
import Hotel from './Component/Hotel'

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/trip' element={<Trip/>}/>
        <Route path='/flight' element={<Flight/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App