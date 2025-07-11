import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productosDummy = [
  "Auriculares Bluetooth",
  "Reloj Inteligente",
  "Lámpara LED",
  "Cargador Inalámbrico",
  "Mini Dron",
  "Cepillo Facial",
  "Soporte para Celular",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filtered = productosDummy.filter((p) =>
        p.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar productos..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
      />
      <AnimatePresence>
        {results.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-md z-50 border overflow-hidden"
          >
            {results.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
