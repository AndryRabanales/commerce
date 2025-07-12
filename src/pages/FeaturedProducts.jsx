import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    title: "Playera Oversize Bad Bunny",
    price: 299,
    image: "https://via.placeholder.com/300x400?text=Bad+Bunny"
  },
  {
    id: 2,
    title: "Gorra de Mewing",
    price: 199,
    image: "https://via.placeholder.com/300x400?text=Mewing"
  },
  {
    id: 3,
    title: "Llavero del Juego del Calamar",
    price: 99,
    image: "https://via.placeholder.com/300x400?text=Squid+Game"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">🔥 Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
