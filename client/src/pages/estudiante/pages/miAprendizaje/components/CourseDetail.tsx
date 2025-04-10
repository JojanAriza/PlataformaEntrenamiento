import {
  FaArrowLeft,
  FaClipboardCheck,
  FaDownload,
  FaCertificate,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { curso } from "@/models/curso";
import { useEffect, useState } from "react";
import { genericCourse } from "@/data/genericCourse";
import getCourseDetails from "@/services/getCourseDetails";

export default function CourseDetail() {
  const [course, setCourse] = useState<curso>(genericCourse);
  const [error, setError] = useState<string>("");
  const { courseId } = useParams();
  const { tipo, titulo, color } = course;

  useEffect(() => {
    if (!courseId) {
      setError("No se proveyó un ID");
      return;
    }

    if (isNaN(Number(courseId))) {
      setError("El ID proveído no es un número");
    }
    const id = parseInt(courseId);
    getCourseDetails(id).then(setCourse);
  });

  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-gray-100 grid grid-cols-1 grid-rows-[1fr_1fr_8fr] items-center w-full max-h-full">
      {/* Volver */}
      <div className="w-full mb-4">
        <Link
          to={"/"}
          className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Volver
        </Link>
      </div>

      {/* Encabezado */}
      <div className="w-full">
        <div className="flex flex-col items-start">
          <span
            className={
              "text-lg italic font-bold " + color + " text-white px-3 py-1 mr-4"
            }
          >
            {tipo}
          </span>
          <h1 className="text-2xl ml-4 mt-2 font-semibold text-superDeepGray">
            {titulo}
          </h1>
        </div>
      </div>

      {/* Opciones */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 align-self-end justify-self-center justify-center just">
        {/* Encuesta de Satisfacción */}
        <Link
          to="/student/survey"
          className="flex flex-col items-center justify-center bg-superDeepGray h-48 w-48 rounded-lg  text-white hover:bg-gray-400 transition cursor-pointer"
        >
          <FaClipboardCheck className="text-6xl mb-3" />
          <p className="text-base font-semibold text-center">
            Encuesta de Satisfacción
          </p>
        </Link>

        {/* Descarga de Material */}
        <a
          href="/descargar-material"
          className="flex flex-col items-center justify-center  bg-gray-300 h-48 w-48 rounded-lg shadow-lg text-gray-700 hover:bg-gray-400 transition cursor-pointer relative"
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
          <p className="text-base font-semibold text-center">Certificado</p>
        </a>
      </div>
    </div>
  );
}
