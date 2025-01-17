import { FaClipboardCheck } from "react-icons/fa";

export default function HeaderSection() {
    return (
      <div className="bg-blue-700 text-white p-6 flex justify-between items-center">
        <div>
          <span className="text-sm font-bold bg-blue-600 px-3 py-1 rounded-md">
            Curso guiado
          </span>
          <h1 className="text-2xl font-semibold mt-2">Nombre del Curso</h1>
        </div>
      {/* Ícono y texto */}
      <div className="flex items-center space-x-2">
        <FaClipboardCheck className="text-2xl" />
        <span className="text-lg font-medium">Encuesta de Satisfacción</span>
      </div>
      </div>
    );
  }
  