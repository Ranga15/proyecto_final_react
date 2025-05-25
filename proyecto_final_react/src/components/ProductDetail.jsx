import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState('');

  const handleAddToCart = () => {
    if (quantity < 1 || quantity > product.stock) {
      setConfirmation('Cantidad no válida. Verifique el stock disponible.');
      return;
    }

    addToCart({ ...product, quantity });
    setConfirmation(`Agregado ${quantity} producto(s) al carrito.`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Color:</strong> {product.color}</p>
      <p><strong>Precio:</strong> ${product.price.toLocaleString('es-CO')} COP</p>
      <p><strong>Stock disponible:</strong> {product.stock}</p>

      <div className="mt-4">
        <label htmlFor="quantity" className="block font-semibold mb-1">Cantidad:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded w-20"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Agregar al carrito
      </button>

      {confirmation && (
        <p className="mt-3 text-blue-600 font-semibold">{confirmation}</p>
      )}
    </div>
  );
}
