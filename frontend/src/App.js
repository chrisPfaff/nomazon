import React, {useState, useEffect } from 'react';
import './styles/scss/index.scss';
import  data  from "./data.js";

function App() {
  const [products, setProducts ] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, [])

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
}
 const productList = () => (
  <ul className="products"> 
  {
    products.map((product) => {
      return <li>
            <div class="product">
                <img class="product-image" src={product.image} alt="product"/>
                <div class="product-name">{product.name}</div>
                <div class="product-brand">{product.brand}</div>
                <div class="product-price">{product.price}</div>
                <div class="product-rating">{product.rating}</div>
            </div>
        </li>
    })
   }
   </ul>
 )
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
          <button onClick={openMenu} className="brand">
              &#9776;
          </button>
        <a href="index.html">Nomazon</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign-In</a>
      </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping Catagories</h3>
        <button className="sidebar-close" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="/">Pants</a>
            </li>
            <li>
              <a href="/">Shants</a>
          </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
        
            {productList()}
        </div>
    </main>
    <footer className="footer">
      circa 2020
    </footer>
  </div>
  );
}

export default App;
