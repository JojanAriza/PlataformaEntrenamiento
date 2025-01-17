import { cursos } from "../data/cursos";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

export default function CourseList() {
    const handleSearch = (searchTerm:string) => {
        console.log("Buscar: ", searchTerm);
        // Aquí puedes implementar la lógica de búsqueda si lo necesitas
      };
    return (
        <div className="p-6 space-y-6">
            <SearchBar onSearch={handleSearch} />
            {cursos.map((curso) => (
                <div
                    key={curso.id}
                    className="flex items-center justify-between bg-gray-200 p-4 mb-2 rounded-md border border-gray-300 shadow-md relative"
                >
                    <div
                        className={`absolute top-0 left-0 h-full ${curso.color}`}
                        style={{ width: "10px" }}
                    ></div>

                    <div className="flex items-center space-x-4 flex-grow-0 pr-6">
                    <div
                        className={`w-24 py-2 text-center font-semibold rounded-md`}
                    >
                        {curso.tipo}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{curso.titulo}</h3>
                    </div>

                    <div className="flex space-x-4 items-center ml-auto text-right">
                    <p className="text-base font-extrabold text-blue-500">{curso.estado}</p>

              
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg font-medium transition"
                    >
                        Ver &gt;&gt;
                    </button>
                    </div>
                    

                </div>


            ))}
             <Pagination/>
        </div>
    );
}
