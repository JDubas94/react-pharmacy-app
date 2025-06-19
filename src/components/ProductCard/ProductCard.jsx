import React from "react";
import { calculateDiscount } from '../../utils/price';
import './ProductCard.scss';

const ProductCard = ({product}) => {
    const discount = product.oldPrice
    ? calculateDiscount(product.oldPrice, product.price)
    : null;
return(
    <div className="product-card">
        {discount && <div className="product-card__discount">
            {discount} %
        </div>}
        <div className="product-card__favorite-icon">
           {product.isFavorite ?(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
           ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
           )
           }
        </div>
        <div className="product-card__container-img">
        <img className="product-card__img" src={product.image} alt={product.name}/>
        </div>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__box">
            <div className="product-card__rating-reviewsCount">
        {"⭐".repeat(Math.round(product.rating))}
        ({product.reviewsCount} відгуків)
        </div>
        <div className="product-card__code">
        Код товара:{product.code}
        </div>
        </div>
        <div className="product-card__box-bottom">
        <div className="product-card__old-price">
             {product.oldPrice && product.oldPrice + ' ₴'}
            </div>
           <div className="product-card__price">{product.price}₴</div>
        <button className="product-card__btn">Купити</button>
        </div>
    </div>
)
}

export default ProductCard;
