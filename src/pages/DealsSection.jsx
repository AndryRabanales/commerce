
import React from 'react';

export default function DealsSection() {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ofertas Especiales</h2>
        <p className="text-lg text-gray-600 mb-6">Descuentos por tiempo limitado en productos seleccionados</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="w-60 bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
            <img src="https://via.placeholder.com/150" alt="Oferta 1" className="rounded mb-3" />
            <h3 className="text-md font-semibold">Oferta 1</h3>
            <p className="text-sm text-gray-600">Antes $49.99 | Ahora $29.99</p>
          </div>
          <div className="w-60 bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
            <img src="https://via.placeholder.com/150" alt="Oferta 2" className="rounded mb-3" />
            <h3 className="text-md font-semibold">Oferta 2</h3>
            <p className="text-sm text-gray-600">Antes $39.99 | Ahora $19.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}
