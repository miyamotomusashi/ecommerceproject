//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import { Categories } from './components/Layout/Categories/Categories'
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import { Policy } from './components/Layout/Policy/Policy'
import Product from './components/Layout/Products/Product'
import { Slider } from './components/Layout/Slider/Slider'
import './App.css'
import Campaigns from './components/Layout/Campaigns/Campaigns'
import Blogs from './components/Layout/Blogs/Blogs'
function App() {
    return (
    <>
        <Header />
        <Slider />
        <Categories />
        <Product />
        <Campaigns/>
        <Product />
        <Blogs/>
        <h1>Hello</h1>
        <Policy />
        <Footer />
    </>
  )
}

export default App
