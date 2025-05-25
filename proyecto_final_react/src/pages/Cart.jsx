import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, setCart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [domicilio, setDomicilio] = useState(false);

  useEffect(() => {
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));
    setDomicilio(datosUsuario?.domicilio || false);
  }, []);

  const calcularTotal = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    return domicilio ? subtotal + 10000 : subtotal;
  };

  const total = calcularTotal();

  const cancelarCompra = () => {
    clearCart();
    localStorage.removeItem('datosUsuario');
    navigate('/');
  };

  return (
    <div>
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Color</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.marca} {producto.modelo}</td>
                  <td>{producto.color}</td>
                  <td>{producto.categoria}</td>
                  <td>${producto.precio.toLocaleString()}</td>
                  <td>{producto.quantity}</td>
                  <td>${(producto.precio * producto.quantity).toLocaleString()}</td>
                  <td>
                    <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            {domicilio && <p>📦 Costo de domicilio: <strong>$10.000</strong></p>}
            <p><strong>Total a pagar:</strong> ${total.toLocaleString()}</p>
          </div>

          <div>
            <button onClick={() => navigate('/products')}>Seguir comprando</button>
            <button onClick={cancelarCompra}>Cancelar y volver al inicio</button>
            <button onClick={() => navigate('/payment')}>Finalizar compra</button> {/* ✅ BOTÓN CLAVE */}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
