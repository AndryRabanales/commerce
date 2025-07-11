import PageWrapper from '../layout/PageWrapper';

export default function Products() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Catálogo de Productos</h1>
        <p className="text-lg text-gray-600">Aquí irán todos los productos conectados con AliExpress</p>
        <div className="mt-8 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-500">
          ¡Explora todo!
        </div>
      </div>
    </PageWrapper>
  );
}
