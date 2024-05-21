
import React from "react"
 import { Categories } from '../components/Categories/Categories'
 import Footer from '../components/Footer/Footer'
 import Header from '../components/Header/Header'
 import { Policy } from '../components/Policy/Policy'
 import Product from '../components/Products/Product'
 import { Slider } from '../components/Slider/Slider'
 import Campaigns from '../components/Campaigns/Campaigns'
 import Blogs from '../components/Blogs/Blogs'
 import Brands from '../components/Brands/Brands'
 import Campaignsingle from '../components/Campaignsingle/Campaignsingle'
const HomePage = () => (
    <React.Fragment>
        <Header />
        <Slider />
        <Categories />
        <Product />
        <Campaigns />
        <Product />
        <Blogs />
        <Brands />
        <Campaignsingle />
        <Policy />
        <Footer />
    </React.Fragment>
)

export default HomePage;