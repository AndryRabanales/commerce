import Navbar from './components/Navbar'; // Asegúrate de importar bien
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Offers from './pages/Offers';
import NewsletterBanner from './pages/NewsletterBanner';

function App() {
  return (
    <>
      <Navbar /> {/* <-- Aquí se muestra siempre la navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/newsletter" element={<NewsletterBanner />} />
      </Routes>
    </>
  );
}

export default App;
