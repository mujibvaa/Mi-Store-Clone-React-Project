import React from 'react'
import ProductReviewsCard from "./ProductReviewsCard.js"
import "../styling/ProductReview.css"
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>

        {productReviews.map((item,index)=> (
            <ProductReviewsCard price={item.price} name = {item.name} review={item.review} index={index} image = {item.image} /> ))}
        
        </div>
  )
}

export default ProductReviews