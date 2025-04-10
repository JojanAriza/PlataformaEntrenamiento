
export default function footer() {
  return (
    <footer className="bg-gray-100 py-10">
    <div className="max-w-7xl mx-auto px-4">
      {/* Contenedor principal de links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        {/* Columna: Compañía */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">COMPAÑÍA</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#quienes-somos" className="hover:text-blue-600">Quienes somos</a></li>
            <li><a href="#trabaje" className="hover:text-blue-600">Trabaje con nosotros</a></li>
            <li><a href="#busque-partners" className="hover:text-blue-600">Busque Partners</a></li>
            <li><a href="#privacidad" className="hover:text-blue-600">Políticas de privacidad</a></li>
            <li><a href="#recursos" className="hover:text-blue-600">Recursos, guías, tachn y Webinars</a></li>
          </ul>
        </div>
        {/* Columna: Entendiendo los SIG */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">ENTENDIENDO LOS SIG</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#entrenamiento" className="hover:text-blue-600">Entrenamiento</a></li>
            <li><a href="#los-mapass" className="hover:text-blue-600">Los mapas que amamos</a></li>
          </ul>
        </div>
        {/* Columna: Nuestros Productos */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">NUESTROS PRODUCTOS</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#arcgis" className="hover:text-blue-600">ArcGIS</a></li>
            <li><a href="#arcgis-online" className="hover:text-blue-600">ArcGIS Online</a></li>
            <li><a href="#mas-productos" className="hover:text-blue-600">Todos nuestros productos</a></li>
            <li><a href="#soluciones-sector" className="hover:text-blue-600">Soluciones para cada sector</a></li>
          </ul>
        </div>
        {/* Columna: Servicios */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">SERVICIOS</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#consultoria" className="hover:text-blue-600">Consultoría</a></li>
            <li><a href="#soporte" className="hover:text-blue-600">Soporte</a></li>
            <li><a href="#entrenamiento" className="hover:text-blue-600">Entrenamiento</a></li>
          </ul>
        </div>
        {/* Columna: Comunidad */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">COMUNIDAD</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#eventos" className="hover:text-blue-600">Eventos</a></li>
            <li><a href="#somos-comunidad" className="hover:text-blue-600">Somos comunidad SIG</a></li>
            <li><a href="#portal-noticias" className="hover:text-blue-600">Portal de noticias</a></li>
          </ul>
        </div>
      </div>

      {/* Separador */}
      <hr className="border-gray-300 mb-4" />

      {/* Parte inferior: branding, copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Branding */}
        <div className="flex items-center space-x-4">
          <div className="font-bold text-gray-700">
            THE SCIENCE <br /> OF WHERE
          </div>
          {/* Íconos de redes sociales (ejemplo) */}
          <div className="flex space-x-2">
            <a href="#facebook" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#youtube" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#linkedin" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © Esri Colombia C.A NIT 901.194.145
        </div>
      </div>
    </div>
  </footer>
  )
}
