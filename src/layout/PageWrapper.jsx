import { motion } from 'framer-motion';

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(12px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1], // curva más fluida (easeOutExpo)
      }}
    >
      {children}
    </motion.div>
  );
}

