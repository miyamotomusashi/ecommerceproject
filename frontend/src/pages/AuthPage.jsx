import { Fragment } from "react"
import Auth from "../components/Auth/Auth"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const AuthPage = () => {
    return (
        <Fragment>
            <Header />
            <Auth />
            <Footer />
        </Fragment>
    )
}
export default AuthPage