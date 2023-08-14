import React, { useState } from 'react';
import PurchaseHistory from '/Users/poorvika.gupta/what-next/src/components/product_recmd.js';
import ProductRecommendation from '/Users/poorvika.gupta/what-next/src/components/product_recmd.js';
import data from '/Users/poorvika.gupta/what-next/src/data.json';

const App = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);

  const handleBuy = () => {
    const recommendedProduct = data[currentRecommendationIndex];
    setPurchaseHistory([...purchaseHistory, recommendedProduct]);
    setCurrentRecommendationIndex(currentRecommendationIndex + 1);
  };

  const handleSkip = () => {
    setCurrentRecommendationIndex(currentRecommendationIndex + 1);
  };

  const currentRecommendation = data[currentRecommendationIndex];

  return (
    <div>
      <h1>Product Recommendation Game</h1>
      <PurchaseHistory history={purchaseHistory} />
      {currentRecommendation ? (
        <ProductRecommendation
          product={currentRecommendation}
          onBuy={handleBuy}
          onSkip={handleSkip}
        />
      ) : (
        <p>No more recommendations available.</p>
      )}
    </div>
  );
};

export default App;

