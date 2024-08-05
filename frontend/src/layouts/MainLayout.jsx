
import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PropTypes from 'prop-types'
const MainLayout = ({children}) => {
  return (
    <React.Fragment>
        <Header />
        { children }
        <Footer/>
    </React.Fragment>

  )
}

export default MainLayout

MainLayout.propTypes = {
    children : PropTypes.node
}