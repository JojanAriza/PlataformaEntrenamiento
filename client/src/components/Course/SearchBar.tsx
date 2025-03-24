import { useState } from "react";
import { FaTh, FaBars, FaSearch } from "react-icons/fa"; 
import { Link } from "react-router-dom";

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
    <div className="flex gap-y-4 flex-col items-start bg-gray-100  rounded mb-6">
      {/* Barra de Búsqueda */}
      <div className="flex items-center w-full content-between">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscando..."
            className="max-w-80 p-2 rounded-full border border-gray-300 focus:border-black focus:outline-none px-8"
          />
          <div className="text-gray-400 absolute right-4">
              <FaSearch />
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-darkGray px-3 py-1 ml-3 text-white p-2 hover:bg-superDeepGray transition"
        >
          Buscar
        </button>
      </div>

      {/* Vista con Iconos */}
      <div className="flex self-end items-center gap-4">
        <span className="text-gray-600 font-medium text-lg">Vista</span>
        <Link to={'/student/list'} className="text-gray-600 hover:text-blue-600 transition">
          <FaBars size={20} />
        </Link >
        <Link to={'/'} className="text-gray-600 hover:text-blue-600 transition">
          <FaTh size={20} />
        </Link >
      </div>
    </div>
  );
}
