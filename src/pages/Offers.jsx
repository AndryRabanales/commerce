import PageWrapper from '../layout/PageWrapper';

export default function Offers() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-orange-700 mb-4">¡Ofertas Especiales!</h1>
          <p className="text-lg text-orange-600">Productos seleccionados con grandes descuentos por tiempo limitado.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
