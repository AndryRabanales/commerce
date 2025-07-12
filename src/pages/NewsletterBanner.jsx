const NewsletterBanner = () => {
    return (
      <section className="bg-gradient-to-r from-pink-100 via-white to-blue-100 py-10 px-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          ¡Suscríbete y obtén un 10% de descuento!
        </h2>
        <p className="text-gray-600 mb-6">
          Recibe ofertas exclusivas, lanzamientos y promociones directo a tu correo.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full md:w-2/3 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all"
          >
            Suscribirme
          </button>
        </form>
      </section>
    );
  };
  
  export default NewsletterBanner;
  