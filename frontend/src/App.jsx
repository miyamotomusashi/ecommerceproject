//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Categories } from './components/Layout/Categories/Categories'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import { Policy } from './components/Layout/Policy/Policy'
import { Slider } from './components/Layout/Slider/Slider'
function App() {
    return (
    <>
        <Header />
        <Slider />
        <Categories />
        <h1>Hello</h1>
        <Policy />
        <Footer />
    </>
  )
}

export default App
