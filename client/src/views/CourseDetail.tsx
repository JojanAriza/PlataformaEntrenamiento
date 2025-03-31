import { FaArrowLeft, FaClipboardCheck, FaDownload, FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CourseDetail() {
  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center w-full">
      {/* Volver */}
      <div className="w-full mb-4">
        <Link to={'/'} className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
          <FaArrowLeft className="mr-2" />
          Volver
        </Link>
      </div>

      {/* Encabezado */}
      <div className="w-full mb-8">
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold bg-blue-500 text-white px-3 py-1 rounded-md mr-4">
            Curso guiado
          </span>
          <h1 className="text-2xl font-semibold text-gray-800">
            Nombre del Curso
          </h1>
        </div>
      </div>

      {/* Opciones */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 justify-center">
        {/* Encuesta de Satisfacción */}
        <Link
          to="/student/survey"
          className="flex flex-col items-center justify-center bg-gray-300 h-48 w-48 rounded-lg shadow-lg text-gray-700 hover:bg-gray-400 transition cursor-pointer"
        >
          <FaClipboardCheck className="text-6xl mb-3" />
          <p className="text-base font-semibold text-center">Encuesta de Satisfacción</p>
        </Link>

         {/* Descarga de Material */}
         <a
          href="/descargar-material"
          className="flex flex-col items-center justify-center bg-gray-300 h-48 w-48 rounded-lg shadow-lg text-gray-700 hover:bg-gray-400 transition cursor-pointer relative"
        >
          <FaDownload className="absolute top-2 right-2 text-gray-600 text-xl" />
          <FaDownload className="text-6xl mb-3" />
          <p className="text-base font-semibold text-center">
            Descarga de Material
          </p>
        </a>

        {/* Certificado */}
        <a
          href="/certificado"
          className="flex flex-col items-center justify-center bg-gray-300 h-48 w-48 rounded-lg shadow-lg text-gray-700 hover:bg-gray-400 transition cursor-pointer relative"
        >
          <FaDownload className="absolute top-2 right-2 text-gray-600 text-xl" />
          <FaCertificate className="text-6xl mb-3" />
          <p className="text-base font-semibold text-center">
            Certificado
          </p>
        </a>
      </div>
    </div>
  );
}
