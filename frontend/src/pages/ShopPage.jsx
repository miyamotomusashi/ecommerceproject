import { Fragment } from "react";

import { Categories } from "../components/Categories/Categories";
import Product from "../components/Products/Product";
import Campaignsingle from "../components/Campaignsingle/Campaignsingle";
import { Policy } from "../components/Policy/Policy";

const ShopPage = () => (
  <Fragment>
    <Categories />
    <Product />
    <Campaignsingle />
    <Policy />
  </Fragment>
);

export default ShopPage;
