import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartIcon from './CartIcon';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? 'bg-white/80 shadow-md backdrop-blur' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center h-20">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-playfair font-extrabold text-gray-900 tracking-wide transform hover:scale-105 transition duration-300"
        >
          MiTienda
        </Link>

        {/* DESKTOP NAV */}
        <div className="space-x-10 text-base font-medium hidden md:flex items-center">
          <AnimatedNavLink to="/" label="Inicio" active={location.pathname === '/'} />
          <AnimatedNavLink to="/products" label="Productos" active={location.pathname === '/products'} />
          <CartIcon count={3} />
        </div>

        {/* MOBILE BURGER BUTTON */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-10 text-lg font-medium"
          >
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black text-gray-700">
              Inicio
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-black text-gray-700">
              Productos
            </Link>
            <CartIcon count={3} />
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl font-bold text-gray-500 hover:text-black"
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function AnimatedNavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`relative group transition-all duration-300 ease-in-out ${
        active ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={`absolute left-0 -bottom-1 h-0.5 w-full bg-black transform transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 ${
          active ? 'scale-x-100' : ''
        }`}
      />
    </Link>
  );
}
