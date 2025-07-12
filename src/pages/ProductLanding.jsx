import { useEffect, useState } from 'react';
import { FiCheckCircle, FiTruck, FiShield, FiClock } from 'react-icons/fi';

export default function ProductLanding() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 min FOMO

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto font-sans">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">🔥 Cepillo Alisador 2 en 1</h1>
        <p className="text-lg text-gray-600">Seca y alisa al mismo tiempo. Resultado profesional desde casa.</p>
        <div className="mt-4 flex justify-center items-center gap-3">
          <span className="text-xl text-red-600 font-bold line-through">$999</span>
          <span className="text-2xl text-green-600 font-extrabold">$499</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Oferta termina en <span className="font-semibold text-black">{formatTime(timeLeft)}</span></p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
          ¡Lo quiero ahora!
        </button>
      </section>

      {/* BENEFICIOS */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FiTruck className="text-3xl text-blue-600" />
          <p className="font-semibold mt-2">Envío Gratis</p>
        </div>
        <div className="flex flex-col items-center">
          <FiCheckCircle className="text-3xl text-blue-600" />
          <p className="font-semibold mt-2">Resultados Garantizados</p>
        </div>
        <div className="flex flex-col items-center">
          <FiShield className="text-3xl text-blue-600" />
          <p className="font-semibold mt-2">Pago 100% Seguro</p>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Mira cómo funciona</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <img src="https://via.placeholder.com/400x400?text=Before+Use" alt="Antes" className="rounded shadow" />
          <img src="https://via.placeholder.com/400x400?text=After+Use" alt="Después" className="rounded shadow" />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Lo que dicen nuestras clientas</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <p className="text-gray-700 italic">"Me llegó súper rápido y funciona de maravilla. Lo uso diario."</p>
            <p className="text-sm font-semibold mt-2">– Laura M.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p className="text-gray-700 italic">"Me dejó el cabello como recién salido del salón. ¡Lo amo!"</p>
            <p className="text-sm font-semibold mt-2">– Mariana R.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="bg-white border rounded p-4">
            <summary className="cursor-pointer font-semibold">¿Cuánto tarda en llegar?</summary>
            <p className="mt-2 text-gray-600">El envío tarda entre 7 y 12 días hábiles.</p>
          </details>
          <details className="bg-white border rounded p-4">
            <summary className="cursor-pointer font-semibold">¿Qué pasa si no me gusta?</summary>
            <p className="mt-2 text-gray-600">Puedes devolverlo en los primeros 7 días sin costo.</p>
          </details>
          <details className="bg-white border rounded p-4">
            <summary className="cursor-pointer font-semibold">¿Es seguro pagar aquí?</summary>
            <p className="mt-2 text-gray-600">Sí, usamos pasarelas de pago cifradas y seguras.</p>
          </details>
        </div>
      </section>

      {/* STICKY BUTTON */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-bold text-lg shadow-xl transition">
          Comprar ahora por $499
        </button>
      </div>
    </div>
  );
}
