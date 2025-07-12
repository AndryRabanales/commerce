const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-xl p-4 shadow hover:shadow-lg transition-all">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Agregar al carrito
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  