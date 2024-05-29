import React from 'react';

function Product({ product, addToCart }) {
  return (
    
    <div className='cartBox' >
      <div> <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/></div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>  
  );
}

export default Product;
