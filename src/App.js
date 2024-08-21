import React, { useState } from 'react';
import './App.css';

// Sample product data based on your provided images
const products = [
  { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', isAdded: false },
  { id: 2, name: 'Special Item', price: '$18.00', isAdded: false },
  { id: 3, name: 'Sale Item', price: '$25.00', isAdded: false },
  { id: 4, name: 'Popular Item', price: '$40.00', isAdded: false }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h1>Start Bootstrap</h1>
          <div>
            <span>Cart ({cartItems.length})</span>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Shop in style</h2>
          <p>With this shop homepage template</p>
        </section>

        <section className="products">
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-item">
                <div className="product-image">450 x 300</div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                {cartItems.some(item => item.id === product.id) ? (
                  <button onClick={() => removeFromCart(product)}>
                    Remove from cart
                  </button>
                ) : (
                  <button onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Copyright © Your Website 2023</p>
      </footer>
    </div>
  );
}

export default App;
