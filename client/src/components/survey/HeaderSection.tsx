import { FaClipboardCheck } from "react-icons/fa";

export default function HeaderSection() {
    return (
      <div className="bg-[#004574] text-white p-6 flex justify-between items-center">
        <div>
          <span className="text-sm font-bold bg-[#4472c4] px-3 py-1 italic">
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
  