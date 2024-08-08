

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
 import Search from '../components/Modals/Search/Search'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ModalDialog from '../components/Modals/Dialog/ModalDialog'
const MainLayout = ({children}) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
    const [isDialogShow, setIsDialogShow] = useState(false);

    useEffect(()=>{
        const dialogStatus = localStorage.getItem("dialog") ? JSON.parse( localStorage.getItem("dialog")) :  localStorage.setItem("dialog",JSON.stringify(true));

        setTimeout(() => {
            setIsDialogShow(dialogStatus); 
         }, 2000);
    },[])

  
  return (
    // <React.Fragment>
    <div className='main-layout'>
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
        <ModalDialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow}/>
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

