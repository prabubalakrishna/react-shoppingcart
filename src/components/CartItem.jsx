import React from 'react';

function CartItem({ item }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>${item.price}</p>
    </div>
  );
}

export default CartItem;
