import React from 'react';

const PurchaseHistory = ({ history }) => (
  <div>
    <h2>Purchase History</h2>
    <ul>
      {history.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

export default PurchaseHistory;
