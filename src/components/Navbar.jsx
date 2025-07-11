import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';


export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desactivar scroll al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? 'bg-white/80 shadow-md backdrop-blur' : 'bg-white'
      }`}
    >
      {/* NAVBAR PRINCIPAL */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center h-20">
        <Link
          to="/"
          className="text-3xl font-playfair font-extrabold text-gray-900 tracking-wide transform hover:scale-105 transition duration-300"
        >
          MiTienda
        </Link>

        {/* DESKTOP NAV */}
        {/* DESKTOP NAV */}
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



        {/* BOTÓN BURGER MOBILE */}
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

      {/* MENÚ LATERAL ANIMADO PARA MÓVIL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* FONDO OSCURO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* MENÚ LATERAL */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-xs bg-white z-50 shadow-xl flex flex-col justify-between overflow-y-auto"
            >
              {/* HEADER MENÚ */}
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h2 className="text-lg font-semibold">Menú</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>

              {/* ENLACES DEL MENÚ */}
              <nav className="flex flex-col gap-5 px-6 py-6 text-gray-800 font-medium">
                <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
                  Inicio <span>›</span>
                </Link>
                <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-black flex justify-between">
                  Productos <span>›</span>
                </Link>
                <button className="flex justify-between hover:text-black">
                  Categorías <span>›</span>
                </button>
                <button className="flex justify-between hover:text-black">
                  Ofertas <span>›</span>
                </button>
              </nav>

              {/* FOOTER DEL MENÚ */}
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
