import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const { cart, clearCart } = useContext(CartContext);
  const [tarjeta, setTarjeta] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [verCvv, setVerCvv] = useState(false);
  const [titular, setTitular] = useState('');
  const [domicilio, setDomicilio] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [error, setError] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('datosUsuario'));
    setDomicilio(datos?.domicilio || false);
    setPresupuesto(parseInt(datos?.presupuesto) || 0);
  }, []);

  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const total = subtotal + (domicilio ? 10000 : 0);

  const limpiarCampos = () => {
    setTarjeta('');
    setExp('');
    setCvv('');
    setTitular('');
    setError('');
  };

  const validarCompra = () => {
    if (!tarjeta || !exp || !cvv || !titular) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!/^\d{16}$/.test(tarjeta)) {
      setError('Número de tarjeta inválido (16 dígitos).');
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(exp)) {
      setError('Fecha inválida (usa MM/AA).');
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError('CVV inválido (3 dígitos).');
      return;
    }
    if (total > presupuesto) {
      setError(`Tu presupuesto es de $${presupuesto.toLocaleString()} y el total es mayor.`);
      return;
    }

    setConfirmado(true);
    setTimeout(() => {
      alert('✅ Pago realizado con éxito. Serás redirigido al inicio.');
      clearCart();
      localStorage.removeItem('datosUsuario');
      navigate('/');
    }, 2000);
  };

  return (
    <div>
      <h2>💳 Confirmar Pago</h2>

      <div>
        <label>Número de tarjeta:</label><br />
        <input type="text" maxLength={16} value={tarjeta} onChange={(e) => setTarjeta(e.target.value)} />
      </div>

      <div>
        <label>Fecha de expiración (MM/AA):</label><br />
        <input type="text" placeholder="MM/AA" value={exp} onChange={(e) => setExp(e.target.value)} />
      </div>

      <div>
        <label>CVV:</label><br />
        <input
          type={verCvv ? 'text' : 'password'}
          maxLength={3}
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button type="button" onClick={() => setVerCvv(!verCvv)}>
          {verCvv ? 'Ocultar' : 'Ver'}
        </button>
      </div>

      <div>
        <label>Nombre del titular:</label><br />
        <input type="text" value={titular} onChange={(e) => setTitular(e.target.value)} />
      </div>

      <hr />
      {domicilio && <p>📦 Domicilio: $10.000</p>}
      <p><strong>Total a pagar: ${total.toLocaleString()}</strong></p>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <button onClick={limpiarCampos}>Limpiar</button>
        <button onClick={validarCompra} disabled={confirmado}>Confirmar compra</button>
        <button onClick={() => navigate('/products')}>Volver a productos</button>
      </div>
    </div>
  );
}

export default Payment;
