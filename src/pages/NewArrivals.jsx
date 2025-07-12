
import React from 'react';

export default function NewArrivals() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Novedades</h2>
        <p className="text-lg text-gray-600 mb-6">Productos recién llegados a la tienda</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="w-60 bg-gray-50 rounded-lg shadow-md p-4 hover:scale-105 transition">
            <img src="https://via.placeholder.com/150" alt="Nuevo 1" className="rounded mb-3" />
            <h3 className="text-md font-semibold">Nuevo Producto 1</h3>
            <p className="text-sm text-gray-600">Perfecto para la temporada</p>
          </div>
          <div className="w-60 bg-gray-50 rounded-lg shadow-md p-4 hover:scale-105 transition">
            <img src="https://via.placeholder.com/150" alt="Nuevo 2" className="rounded mb-3" />
            <h3 className="text-md font-semibold">Nuevo Producto 2</h3>
            <p className="text-sm text-gray-600">Edición limitada</p>
          </div>
        </div>
      </div>
    </section>
  );
}
