import React from 'react';
import CartItem from './CartItem';

function Cart({ cart }) {
  return (
    <div>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      </div>
  );
}

export default Cart;
