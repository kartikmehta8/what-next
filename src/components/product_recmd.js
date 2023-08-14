import React from 'react';

const ProductRecommendation = ({ product, onBuy, onSkip }) => {
    if (!product) {
      return <p>No more recommendations available.</p>;
    }
  
    return (
      <div>
        <h2>Recommended Product</h2>
        <p>Name: {product.name}</p>
        <p>Category: {product.category}</p>
        <button onClick={onBuy}>Buy</button>
        <button onClick={onSkip}>Skip</button>
      </div>
    );
  };
  

export default ProductRecommendation;
