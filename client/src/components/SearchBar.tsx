import { useState } from "react";
import { FaTh, FaBars, FaSearch } from "react-icons/fa"; 

type SearchBarProps = {
    onSearch: (term: string) => void;
  }

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
      setSearchTerm("")
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100  rounded mb-6">
      {/* Barra de Búsqueda */}
      <div className="flex items-center w-1/2 relative">
      <div className="absolute right-24 text-gray-400">
          <FaSearch />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscando..."
          className="w-80 p-2 rounded-full border border-gray-300 focus:border-black focus:outline-none px-8"
        />
        <button
          onClick={handleSearch}
          className="bg-darkGray px-3 py-1 ml-3 text-white p-2 hover:bg-superDeepGray transition"
        >
          Buscar
        </button>
      </div>

      {/* Vista con Iconos */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium text-lg">Vista</span>
        <button className="text-gray-600 hover:text-blue-600 transition">
          <FaBars size={20} />
        </button>
        <button className="text-gray-600 hover:text-blue-600 transition">
          <FaTh size={20} />
        </button>
      </div>
    </div>
  );
}
