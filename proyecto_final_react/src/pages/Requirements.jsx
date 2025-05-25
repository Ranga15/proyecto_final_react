import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Requirements() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoEntrega, setMetodoEntrega] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const navigate = useNavigate();

  const validarCampos = () => {
    if (!nombre || !correo || !telefono || !presupuesto || !metodoEntrega) {
      alert('⚠️ Todos los campos son obligatorios.');
      return false;
    }

    const emailValido = /^[\w\.-]+@[\w\.-]+\.\w+$/.test(correo);
    const telefonoValido = /^[0-9]{7,}$/.test(telefono);
    const presupuestoLimpio = presupuesto.replace(/\./g, '');
    const presupuestoValido = /^\d+$/.test(presupuestoLimpio) && parseInt(presupuestoLimpio) > 0;

    if (!emailValido) {
      alert('❌ Correo inválido.');
      return false;
    }
    if (!telefonoValido) {
      alert('❌ Teléfono inválido. Debe tener al menos 7 dígitos y solo números.');
      return false;
    }
    if (!presupuestoValido) {
      alert('❌ Presupuesto inválido. Ingresa una cantidad válida en COP.');
      return false;
    }

    return true;
  };

  const continuar = () => {
    if (!validarCampos()) return;

    const datos = {
      nombre,
      correo,
      telefono,
      domicilio: metodoEntrega === 'domicilio',
      presupuesto: parseInt(presupuesto.replace(/\./g, ''), 10),
    };
    localStorage.setItem('datosUsuario', JSON.stringify(datos));
    navigate('/products');
  };

  const limpiarCampos = () => {
    setNombre('');
    setCorreo('');
    setTelefono('');
    setMetodoEntrega('');
    setPresupuesto('');
  };

  const formatearPresupuesto = (valor) => {
    const soloNumeros = valor.replace(/[^\d]/g, '');
    if (!soloNumeros) return '';
    return parseInt(soloNumeros, 10).toLocaleString('es-CO');
  };

  return (
    <div>
      <h2>Datos del comprador</h2>
      <div className="requisitos-formulario">
        <label>Nombre completo:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre completo"
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Ingresa tu correo"
        />

        <label>Teléfono:</label>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => {
            const soloNumeros = e.target.value.replace(/\D/g, '');
            setTelefono(soloNumeros);
          }}
          placeholder="Ingresa tu teléfono"
        />

        <label>Método de entrega:</label>
        <div>
          <label>
            <input
              type="radio"
              value="tienda"
              checked={metodoEntrega === 'tienda'}
              onChange={(e) => setMetodoEntrega(e.target.value)}
            />{' '}
            Recoger en tienda 🏪
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="domicilio"
              checked={metodoEntrega === 'domicilio'}
              onChange={(e) => setMetodoEntrega(e.target.value)}
            />{' '}
            Envío a domicilio 🚚 (+$10.000)
          </label>
        </div>

        <label>Presupuesto disponible (COP):</label>
        <input
          type="text"
          inputMode="numeric"
          value={presupuesto}
          onChange={(e) => setPresupuesto(formatearPresupuesto(e.target.value))}
          placeholder="Ingresa tu presupuesto"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={continuar}>Empezar Compra</button>
        <button onClick={limpiarCampos} style={{ marginLeft: '10px' }}>
          Limpiar campos
        </button>
      </div>
    </div>
  );
}

export default Requirements;
