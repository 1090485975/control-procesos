'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Control Procesos Judiciales</h1>
        
        {/* Aquí estaban tus tarjetas, las he vuelto a poner */}
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

        {/* Aquí están tus botones */}
        <div className="flex gap-4">
          <Link href="/procesos" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Ver Procesos
          </Link>
          <Link href="/nuevo" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700">
            + Nuevo Proceso
          </Link>
        </div>
      </div>
    </main>
  );
}