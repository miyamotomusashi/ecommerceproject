import React from 'react'
import ProductDetail from "../components/ProductDetails/ProductDetail"
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'


export const ProductDetailsPage = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default ProductDetailsPage