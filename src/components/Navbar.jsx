import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';
import { FiSearch } from 'react-icons/fi';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Detectar scroll para aplicar estilo blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll global cuando el menú o buscador estén abiertos
  useEffect(() => {
    const body = document.body;
    if (menuOpen || searchOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    return () => body.classList.remove('overflow-hidden');
  }, [menuOpen, searchOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? 'bg-white/80 shadow-md backdrop-blur' : 'bg-white'
      }`}
    >
      {/* NAVBAR DESKTOP & MOBILE */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center h-20">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-playfair font-extrabold text-gray-900 tracking-wide transform hover:scale-105 transition duration-300"
        >
          MiTienda
        </Link>

        {/* NAV DESKTOP */}
        <div className="gap-6 text-base font-medium hidden md:flex items-center flex-1">
          <div className="flex items-center gap-6">
            <AnimatedNavLink to="/" label="Inicio" active={location.pathname === '/'} />
            <AnimatedNavLink to="/products" label="Productos" active={location.pathname === '/products'} />
          </div>

          <div className="flex-1 px-4">
            <SearchBar />
          </div>

          <CartIcon count={3} />
        </div>

        {/* ICONOS MOBILE */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-gray-700"
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar"
          >
            <FiSearch className="w-6 h-6" />
          </button>
          <button
            className="text-gray-700"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ASIDE MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />
           <motion.aside
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
  className="fixed top-0 right-0 w-[80%] max-w-xs h-screen bg-white z-50 shadow-xl flex flex-col justify-between overflow-y-auto"
>

              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h2 className="text-lg font-semibold">Menú</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-5 px-6 py-6 text-gray-800 font-medium">
                <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
                  Inicio <span>›</span>
                </Link>
                <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
                  Productos <span>›</span>
                </Link>
                <Link to="/categories" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
  Categorías <span>›</span>
</Link>
<Link to="/offers" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
  Ofertas <span>›</span>
</Link>
<Link to="/newsletter" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
  Suscríbete <span>›</span>
</Link>

              </nav>

              <div className="px-6 pb-6 space-y-4">
                <button className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800 transition">
                  Unirte
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                  Iniciar sesión
                </button>
                <div className="text-sm text-gray-500 text-center">
                  ¿Necesitas ayuda? <span className="underline cursor-pointer">Contáctanos</span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ASIDE BUSCADOR MÓVIL */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setSearchOpen(false)}
            />
            <motion.aside
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <input
                  type="text"
                  placeholder="Buscar productos"
                  className="w-full px-4 py-2 border rounded-full bg-gray-100"
                />
                <button className="ml-4 text-gray-600 font-medium" onClick={() => setSearchOpen(false)}>
                  Cancelar
                </button>
              </div>
              <h4 className="text-gray-500 text-sm mb-3">Términos populares</h4>
              <div className="flex flex-wrap gap-2">
                {['Jordan', 'Air Max', 'Ofertas', 'AliExpress', 'Moda', 'Gadgets'].map((term) => (
                  <span key={term} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {term}
                  </span>
                ))}
              </div>
            </motion.aside>
          </>
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
