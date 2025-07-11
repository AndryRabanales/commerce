import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartIcon({ count = 3 }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Ícono */}
      <button onClick={() => setOpen(!open)} className="relative group">
        <motion.svg
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-gray-700 group-hover:text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.304 1.15.772l1.264 3.091m0 0L7.5 14.25h9l1.35-6.75H6.05m0 0L5.25 4.5m2.25 15a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </motion.svg>
        {count > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full shadow">
            {count}
          </span>
        )}
      </button>

      {/* Dropdown animado */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border z-50"
          >
            <ul className="text-sm text-gray-700 divide-y divide-gray-200">
              <li>
                <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                  Ver carrito
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpen(false)}>
                  Ir a pagar
                </Link>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                  Vaciar carrito
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
