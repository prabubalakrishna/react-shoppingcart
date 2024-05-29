import React from 'react';
import Product from './Product';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <div className="header">
         <h1>Shopping in style</h1>
         <p>With this shop homeage template</p>
      </div>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
    
      </div>
    </div>
  );
}

export default ProductList;
