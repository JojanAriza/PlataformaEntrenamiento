import {FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg ">

      {/* Controles de paginación */}
      <div className="flex items-center gap-2 ml-3">

        {/* Números de página */}
        <button className="px-3 py-1 text-sm font-semibold text-deadGray ">
          1
        </button>
        <button className="px-3 py-1 text-sm font-semibold text-deepGray">
          2
        </button>
        <button className="px-3 py-1 text-sm font-semibold text-deepGray">
          3
        </button>

        {/* Flecha derecha */}
        <button className="p-2 text-gray-600 flex">
          <FaChevronRight className="m-0"/>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
