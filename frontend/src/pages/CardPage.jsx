import { Fragment } from "react"
import Card from "../components/Card/Card"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const CardPage = () => {
    return (
        <Fragment>
            <Header />
            <Card />
            <Footer/>
        </Fragment>
    )
}

export default CardPage