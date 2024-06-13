import './Card.css'
import CardCoupon from './CardCoupon'
import CardProgreess from './CardProgress'
import CardTable from './CardTable'
import CardTotals from './CardTotals'
const Card = () => {
    return (<section className="cart-page">
        <div className="container">
            <div className="cart-page-wrapper">
                <form className="cart-form">
                    <CardProgreess />
                    <div className="shop-table-wrapper">
                        <CardTable />
                        <div className="actions-wrapper">
                            <CardCoupon />
                        </div>
                    </div>
                </form>
                <div className="cart-collaterals">
                   <CardTotals/>
                </div>
            </div>
        </div>
    </section>)
}

export default Card