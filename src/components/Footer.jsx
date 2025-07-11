import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white text-center border-t py-8 text-sm text-gray-500 shadow-inner"
    >
      <p className="mb-2">&copy; 2025 MiTienda. Todos los derechos reservados.</p>
      <div className="flex justify-center space-x-6 text-gray-400 hover:text-black transition-colors duration-300">
        <a href="#" className="hover:scale-110 transform transition duration-300">Instagram</a>
        <a href="#" className="hover:scale-110 transform transition duration-300">Facebook</a>
        <a href="#" className="hover:scale-110 transform transition duration-300">Contacto</a>
      </div>
    </motion.footer>
  );
}
