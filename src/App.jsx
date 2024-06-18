import React, { useState } from 'react'
import Navbar  from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import PlaceOrder from './pages/placeorder/placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'




const App = () => {

  
    const[showLogin,setShowLogin]=useState(false)


  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='./Cart' element={<Cart/>}/>
        <Route path ='./order' element={<PlaceOrder/>} />

      </Routes>
     </div>
     <Footer/>
   </> // Fragments are used to return multiple elements . here we are returing 2 elements div and footer , so the fragment will now only return one elements.
  )
}

export default App