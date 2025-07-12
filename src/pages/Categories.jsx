import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const mockCategories = [
  {
    id: 1,
    name: 'Tecnología',
    image: 'https://source.unsplash.com/400x400/?technology',
  },
  {
    id: 2,
    name: 'Moda',
    image: 'https://source.unsplash.com/400x400/?fashion',
  },
  {
    id: 3,
    name: 'Gadgets',
    image: 'https://source.unsplash.com/400x400/?gadgets',
  },
  {
    id: 4,
    name: 'Hogar',
    image: 'https://source.unsplash.com/400x400/?home',
  },
];

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simular carga desde backend/API
    setTimeout(() => {
      setCategories(mockCategories);
    }, 500);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 text-center mb-10"
      >
        Explora por Categorías
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <Link to={`/products?category=${encodeURIComponent(category.name)}`}>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
