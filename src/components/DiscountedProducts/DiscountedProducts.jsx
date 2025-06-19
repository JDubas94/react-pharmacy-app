import ProductList from "../ProductList/ProductList";
import products from "../../data/products";
import AllOffersLink from "../AllOffersLink/AllOffersLink";
import "./DiscountedProducts.scss"

function DiscountedProducts(){
    const discountedProducts = products.filter(product => typeof product.oldPrice === "number" && product.oldPrice > product.price);

    return(
        <div className="discount-products">
            <div className="discount-products__container">
            <h3 className="discount-products__title">Акції та знижки</h3>
            <AllOffersLink />
            </div>
            <ProductList products={discountedProducts.slice(0, 4)}/>
        </div>
    )
}
export default DiscountedProducts;