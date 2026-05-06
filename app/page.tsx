'use client'; // Asegúrate de tener esto arriba si usas interactividad
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Control Procesos Judiciales</h1>
        {/* ... tus tarjetas de colores ... */}
        
        {/* Aquí es donde va el botón que une todo */}
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