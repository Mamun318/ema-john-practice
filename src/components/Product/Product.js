import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product,handleAddToCart} =props;
    const {name,img,seller,ratings,price} = product;
    return (
        <div className='product'> 
                    <img src={img} alt="" />
                 <div className='product-info'>
                    <h3>{name}</h3>
                    <p>Price : ${price}</p>
                    <p><small>Seller : {seller}</small></p>
                    <p><small>Ratings : {ratings} star</small></p>
                 </div>               
            
             <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                    <p>Add to cart</p>                 
             </button>

        </div>
    );
};

export default Product;