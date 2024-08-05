
import React from "react"
 import { Categories } from '../components/Categories/Categories'
  import { Policy } from '../components/Policy/Policy'
 import Product from '../components/Products/Product'
 import { Slider } from '../components/Slider/Slider'
 import Campaigns from '../components/Campaigns/Campaigns'
 import Blogs from '../components/Blogs/Blogs'
 import Brands from '../components/Brands/Brands'
 import Campaignsingle from '../components/Campaignsingle/Campaignsingle'
const HomePage = () => (
    <React.Fragment>
        <Slider />
        <Categories />
        <Product />
        <Campaigns />
        <Product />
        <Blogs />
        <Brands />
        <Campaignsingle />
        <Policy />
    </React.Fragment>
)

export default HomePage;