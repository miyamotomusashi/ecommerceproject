
import {Fragment} from "react"
import Header from "../components/Header/Header";
import { Categories } from "../components/Categories/Categories";
import Product from "../components/Products/Product";
import Campaignsingle from "../components/Campaignsingle/Campaignsingle";
import { Policy } from "../components/Policy/Policy";
import Footer from "../components/Footer/Footer";
 
const ShopPage = () => (
    <Fragment>
       <Header/>
       <Categories/>
       <Product/>
       <Campaignsingle/>
       <Policy/>
       <Footer/>
    </Fragment>
)

export default ShopPage;