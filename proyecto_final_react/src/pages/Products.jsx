import React, { useEffect, useState } from 'react';
import productsData from '../api/products';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [verDescripcion, setVerDescripcion] = useState({});
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState({});
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem('productosConStock'));
    if (guardado) {
      setProductos(guardado);
    } else {
      const inicializados = productsData.map((p, i) => ({
        ...p,
        id: p.id ?? i + 1,
        quantity: 1,
        stock: p.stock ?? 10
      }));
      setProductos(inicializados);
      localStorage.setItem('productosConStock', JSON.stringify(inicializados));
    }
  }, []);

  useEffect(() => {
    if (mostrarNotificacion) {
      const timer = setTimeout(() => setMostrarNotificacion(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [mostrarNotificacion]);

  const toggleDescripcion = (id) => {
    setVerDescripcion((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const cambiarCantidad = (id, operacion) => {
    setCantidadSeleccionada((prev) => {
      const actual = prev[id] || 1;
      const nuevaCantidad = operacion === 'incrementar' ? actual + 1 : Math.max(1, actual - 1);
      return {
        ...prev,
        [id]: nuevaCantidad,
      };
    });
  };

  const agregarProducto = (producto) => {
    const cantidad = cantidadSeleccionada[producto.id] || 1;
    addToCart({ ...producto, quantity: cantidad });
    setMostrarNotificacion(true);
  };

  const productosFiltrados = productos.filter((p) => {
    const coincideMarca = filtroMarca ? p.marca === filtroMarca : true;
    const coincideCategoria = filtroCategoria ? p.categoria === filtroCategoria : true;
    return coincideMarca && coincideCategoria;
  });

  const marcasUnicas = [...new Set(productsData.map((p) => p.marca))];
  const categoriasUnicas = [...new Set(productsData.map((p) => p.categoria))];

  return (
    <div className="productos-container">
      <div className="productos-header">
        <h2>Lista de Productos</h2>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button className="btn-carrito" onClick={() => navigate('/cart')}>🛒 Carrito</button>
          <button className="btn-inicio" onClick={() => navigate('/')}>🏠 Inicio</button>
        </div>
      </div>

      <div className="filtros" style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <select onChange={(e) => setFiltroMarca(e.target.value)} defaultValue="">
          <option value="">Filtrar por Marca</option>
          {marcasUnicas.map((marca, idx) => (
            <option key={idx} value={marca}>{marca}</option>
          ))}
        </select>

        <select onChange={(e) => setFiltroCategoria(e.target.value)} defaultValue="">
          <option value="">Filtrar por Categoría</option>
          {categoriasUnicas.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {mostrarNotificacion && (
        <div className="notificacion">
          ✅ Producto agregado al carrito
        </div>
      )}

      <div className="productos-lista" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h3>{producto.marca} - {producto.modelo}</h3>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Color:</strong> {producto.color}</p>
            <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>

            {verDescripcion[producto.id] && (
              <p>{producto.descripcion}</p>
            )}
            <button onClick={() => toggleDescripcion(producto.id)}>
              {verDescripcion[producto.id] ? 'Ocultar' : 'Ver más'}
            </button>

            <div className="control-cantidad">
              <label>Cantidad:</label>
              <div className="input-cantidad">
                <button onClick={() => cambiarCantidad(producto.id, 'disminuir')}>−</button>
                <input
                  type="number"
                  min="1"
                  value={cantidadSeleccionada[producto.id] || 1}
                  readOnly
                />
                <button onClick={() => cambiarCantidad(producto.id, 'incrementar')}>+</button>
              </div>
            </div>

            <button
              className="btn-agregar"
              style={{ marginTop: '10px' }}
              onClick={() => agregarProducto(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
