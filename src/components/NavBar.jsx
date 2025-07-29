import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <div><strong>MiTienda</strong></div>
      <div>
        <a href="#" style={{ marginRight: '1rem' }}>Inicio</a>
        <a href="#" style={{ marginRight: '1rem' }}>Productos</a>
        <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
