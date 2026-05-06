export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Control Procesos Judiciales</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold text-blue-600">5</h2>
            <p className="text-gray-600">Procesos Activos</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-600">
            <h2 className="text-3xl font-bold text-orange-600">2</h2>
            <p className="text-gray-600">Próximos Vencimientos</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
            <h2 className="text-3xl font-bold text-green-600">10</h2>
            <p className="text-gray-600">Alertas Enviadas</p>
          </div>
        </div>
      </div>
    </main>
  );
}