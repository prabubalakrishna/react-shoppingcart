import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import'./App.css';

const products = [
  {name: "Fancy P",  price: "40.0 - $80.00"},
  {name: "Special Item",price:"20.00- $18.00"},
  {name: "Sale Item", price: "50.00 - 25.00"},
  {name: "Popular Item", price: 40.00 },
  {name: "Sale Item", price: "50.00 - 25.00"},
  {name: "Fancy Product", price: "120.0 - 280"},
  {name: "Special Item", price: "20.00 - 18.0"},
  {name: "Popular Item", price: 40.0},
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
