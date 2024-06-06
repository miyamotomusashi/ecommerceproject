
import React, { Fragment } from "react"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Policy } from "../components/Policy/Policy";
import Contact from "../components/Contact/Contact";

const ContactPage = () => (

   <Fragment>
      <Header/>
      <Contact/>
      <Policy/>
      <Footer/>
   </Fragment>

)

export default ContactPage;