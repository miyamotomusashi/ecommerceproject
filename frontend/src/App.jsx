//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

import ProductDetailsPage from './pages/ProductDetailsPage';
import CardPage from './pages/CardPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <React.Fragment>
       {/* <HomePage/>  */}
       <CardPage/>
      {/* <ProductDetailsPage /> */}
    </React.Fragment>



  )
}

export default App
