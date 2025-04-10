export default function Header() {
  return (
    <header className="absolute top-4 left-0 w-full z-20">
      <nav className="w-full mx-auto py-4 px-28 flex items-center justify-between">
        {/* Logos a la izquierda */}
        <div className="flex items-center space-x-4">
          <img
            src="/esri_paises.png"
            alt="Logo Esri"
            className="h-20"  // Icono incrementado a h-12
          />
        </div>

        {/* Menú a la derecha */}
        <div className="flex text-white font-medium divide-x divide-white">
  <a href="#learn-arcgis" className="px-4 hover:text-blue-300">
    Learn ArcGIS
  </a>
  <a href="#esri-academy" className="px-4 hover:text-blue-300">
    Esri Academy
  </a>
  <a href="#cronograma" className="px-4 hover:text-blue-300">
    Cronograma
  </a>
  <a href="#catalogo" className="px-4 hover:text-blue-300">
    Catálogo
  </a>
</div>

      </nav>
    </header>
  );
}
