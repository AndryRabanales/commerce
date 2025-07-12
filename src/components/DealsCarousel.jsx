import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const premiumDeals = [
  {
    id: 1,
    title: 'Bolsas Minimalistas Verano 2025',
    price: 249,
    image: 'https://via.placeholder.com/300x400?text=Bolsa+Premium',
  },
  {
    id: 2,
    title: 'Gafas Retro UV Protección',
    price: 179,
    image: 'https://via.placeholder.com/300x400?text=Gafas',
  },
  {
    id: 3,
    title: 'Reloj Smart Waterproof',
    price: 499,
    image: 'https://via.placeholder.com/300x400?text=Reloj+Smart',
  },
  {
    id: 4,
    title: 'Bikini Fashion Limited',
    price: 299,
    image: 'https://via.placeholder.com/300x400?text=Bikini',
  },
];

export default function DealsCarousel() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') current.scrollBy({ left: -320, behavior: 'smooth' });
    else current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">🔥 Premium & Temporada</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 bg-gray-200 rounded-full">
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 bg-gray-200 rounded-full">
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {premiumDeals.map((item) => (
            <div
              key={item.id}
              className="min-w-[240px] bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex-shrink-0"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-blue-600 font-bold mt-1">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
