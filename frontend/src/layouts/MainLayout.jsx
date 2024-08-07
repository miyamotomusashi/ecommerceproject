

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
 import Search from '../components/Modals/Search/Search'
import PropTypes from 'prop-types'
import { useState } from 'react'
const MainLayout = ({children}) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
  return (
    // <React.Fragment>
    <div className='main-layout'>
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
        <Header  setIsSearchShow={setIsSearchShow}/>
        { children }
        <Footer/>
        </div>
    // </React.Fragment>

  )
}

export default MainLayout

MainLayout.propTypes = {
    children : PropTypes.node
}