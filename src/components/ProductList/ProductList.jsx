import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";
import './ProductList.scss';

function ProductList({products}){
    return(
        <div className="product-list">
            {products.slice(0,4).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;