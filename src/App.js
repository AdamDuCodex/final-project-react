import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Products from './components/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DataProvider} from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';
import Checkout from "./components/Checkout";

function App() {

    return (
      <DataProvider>
        <div className="App" >
          <Router>
            <Header />

            <section>
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </section>
          </Router>
        </div>
      </DataProvider>
    );
}

export default App;
