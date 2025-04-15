// Ejemplo con react-icons, instala con: npm install react-icons
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-full mx-auto px-20">
        {/* Contenedor para el logo + iconos (izq) y las columnas (der) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-start mb-6">
          {/* Sección de Branding e Iconos (col 1 en pantallas md) */}
          <div className="flex flex-col items-start space-y-4">
            {/* Logo: Ajusta el alto al que necesites */}
            <img src="/science-icon.svg" alt="Brand Logo" className="h-36" />

            {/* Íconos de redes sociales */}
            <div className="flex space-x-2 text-gray-600">
              <a href="#facebook" className="hover:text-blue-600">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#instagram" className="hover:text-blue-600">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#youtube" className="hover:text-blue-600">
                <FaYoutube className="text-lg" />
              </a>
              <a href="#linkedin" className="hover:text-blue-600">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="#twitter" className="hover:text-blue-600">
                <FaSquareXTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Grid de columnas para enlaces (col-span-5 en pantallas md) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {/* Columna: COMPAÑÍA */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3 border-b border-gray-300 pb-3">
                COMPAÑÍA
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#quienes-somos" className="hover:text-blue-600">
                    Quienes somos
                  </a>
                </li>
                <li>
                  <a href="#trabaje" className="hover:text-blue-600">
                    Trabaje con nosotros
                  </a>
                </li>
                <li>
                  <a href="#busque-partners" className="hover:text-blue-600">
                    Business Partners
                  </a>
                </li>
                <li>
                  <a href="#privacidad" className="hover:text-blue-600">
                    Políticas de privacidad
                  </a>
                </li>
                <li>
                  <a href="#recursos" className="hover:text-blue-600">
                    Peticiones, quejas, reclamos y felicitaciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna: ENTENDIENDO LOS SIG */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3 border-b border-gray-300 pb-3">
                ENTENDIENDO LOS SIG
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#sig" className="hover:text-blue-600">
                    ¿Qué son los SIG?
                  </a>
                </li>
                <li>
                  <a href="#entrenamiento" className="hover:text-blue-600">
                    Entrenamiento
                  </a>
                </li>
                <li>
                  <a href="#cifras" className="hover:text-blue-600">
                    Esri en cifras
                  </a>
                </li>
                <li>
                  <a href="#los-mapass" className="hover:text-blue-600">
                    Los mapas que amamos
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna: NUESTROS PRODUCTOS */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3 border-b border-gray-300 pb-3">
                NUESTROS PRODUCTOS
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#arcgis" className="hover:text-blue-600">
                    ¿Qué es ArcGIS?
                  </a>
                </li>
                <li>
                  <a href="#sig" className="hover:text-blue-600">
                    ¿Qué son los SIG?
                  </a>
                </li>
                <li>
                  <a href="#mas-productos" className="hover:text-blue-600">
                    Todos nuestros productos
                  </a>
                </li>
                <li>
                  <a href="#tienda" className="hover:text-blue-600">
                    Tienda virtual
                  </a>
                </li>
                <li>
                  <a href="#soluciones-sector" className="hover:text-blue-600">
                    Soluciones para cada sector
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna: SERVICIOS */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3 border-b border-gray-300 pb-3">
                SERVICIOS
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#consultoria" className="hover:text-blue-600">
                    Consultoría
                  </a>
                </li>
                <li>
                  <a href="#soporte" className="hover:text-blue-600">
                    Soporte
                  </a>
                </li>
                <li>
                  <a href="#entrenamiento" className="hover:text-blue-600">
                    Entrenamiento
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna: COMUNIDAD */}
            <div>
              <h3 className="font-bold text-gray-700 mb-3 border-b border-gray-300 pb-3">
                COMUNIDAD
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#eventos" className="hover:text-blue-600">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#somos-comunidad" className="hover:text-blue-600">
                    Somos comunidad SIG
                  </a>
                </li>
                <li>
                  <a href="#portal-noticias" className="hover:text-blue-600">
                    Portal de noticias
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separador e información final */}
        <hr className="border-gray-300 mb-4" />
        <div className="text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex items-center gap-1">
            <FaGlobe className="text-sm" />
            Colombia (Spanish)
          </div>
          <div>© Esri Colombia – Calle 90 # 13-40</div>
          <div>Tel: +57 601 650 1550</div>
        </div>
      </div>
    </footer>
  );
}
