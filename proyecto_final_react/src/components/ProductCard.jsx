import React from 'react';

export default function ProductCard({ product, onViewMore }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600">Marca: {product.brand}</p>
      <p className="text-gray-600">Categoría: {product.category}</p>
      <p className="text-gray-600">Color: {product.color}</p>
      <p className="text-green-600 font-bold mt-2">
        ${product.price.toLocaleString('es-CO')} COP
      </p>
      <button
        onClick={onViewMore}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ver más
      </button>
    </div>
  );
}
