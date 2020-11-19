import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from "./Product"

function App() {
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )
  
  /* Category component */
  const Category = () => (
    <div>
      <h2>Category</h2>
      
    </div>
  )
  
  /* Products component */
  const Products = () => (
    <div>
      <Product title="this is it " dis="wait for it"/>
    </div>
  )

  const Prod =()=>
  (
    <div > THis is PRod</div>
  )
  return (
    <div>
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">

        <li><Link to="/">Homes</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/prod">Prod</Link></li>

      </ul>
     </nav>

       <Route exact path="/" component={Home}/>
       <Route exact path="/category" component={Category}/>
       <Route  path="/products" component={Products}/>

  </div>
  );
}

export default App;
