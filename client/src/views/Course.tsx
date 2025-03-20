import { Link } from "react-router-dom";
import { cursos } from "../data/cursos";
import Pagination from "../components/Course/Pagination";
import SearchBar from "../components/Course/SearchBar";

export default function Course() {

  const handleSearch = (searchTerm:string) => {
    console.log("Buscar: ", searchTerm);
    // Aquí puedes implementar la lógica de búsqueda si lo necesitas
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-4 gap-6">
        {cursos.map((curso) => (
          <Link to={'/student/detail'} key={curso.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="relative">
              {/* Imagen */}
              <img
                src=""
                alt={curso.titulo}
                className="w-full h-32 object-cover bg-white"
              />
              
              <div
                className={`absolute bottom-[-14px]  px-3 py-1 rounded text-white text-sm font-bold shadow-md ${curso.color}`}
              >
                {curso.tipo}
              </div>
            </div>
            {/* Contenido del curso */}
            <div className="p-4 pt-6">
              <h3 className="text-base font-semibold mb-2">{curso.titulo}</h3>
              <p className="text-sm text-gray-600 italic">{curso.estado}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination/>
    </div>
  );
}
