import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Requirements from './pages/Requirements';
import Products from './pages/Products';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">Requerimientos</NavLink> |{' '}
        <NavLink to="/products">Productos</NavLink> |{' '}
        <NavLink to="/cart">Carrito</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Requirements />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
