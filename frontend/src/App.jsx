//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

import AuthPage from './pages/AuthPage'
function App() {
  return (
    <React.Fragment>
      {/* <HomePage /> */}
       {/* <ShopPage /> */}
        {/* <ContactPage/> */}
      <AuthPage/>
    </React.Fragment>



  )
}

export default App
