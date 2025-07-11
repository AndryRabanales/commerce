import PageWrapper from '../layout/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Bienvenido a la Tienda</h1>
        <p className="text-lg text-gray-600">Productos de tendencia y calidad superior</p>
        <div className="mt-8 bg-black text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition transform duration-500">
          ¡Ver productos!
        </div>
      </div>
    </PageWrapper>
  );
}
