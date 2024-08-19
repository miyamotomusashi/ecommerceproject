import ProductItem from "./ProductItem";
import "./Products.css";
import PropTypes from 'prop-types'
import { useContext, useState } from "react";
import ProductsData from "../../data.json";


const Product = () => {
    const [products] = useState(ProductsData);

    

    return (<section className="products">
        <div className="container">
            <div className="section-title">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
            </div>
            <div className="product-wrapper product-carousel">
                <div className="glide__track" data-glide-el="track">
                    <ul className="product-list glide__slides" id="product-list">
                        {products.map((product) => (
                            <ProductItem productItem={product} key={product.id} />
                        ))}
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>)
}

export default Product;

Product.propTypes = {
    productItem: PropTypes.object,
    setCardItems: PropTypes.func
}