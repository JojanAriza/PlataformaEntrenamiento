import { cursos } from "../../data/cursos";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import CourseCard from "./CourseCard"

export default function CourseMosaic() {
  const handleSearch = (searchTerm:string) => {
    console.log("Buscar: ", searchTerm);
    // Aquí puedes implementar la lógica de búsqueda si lo necesitas
  };

  return (
    <div className="py-6 px-16">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-4 gap-6">
        {cursos.map((curso) => (
          <CourseCard 
            {...curso}
          ></CourseCard>
        ))}
      </div>
      <Pagination/>
    </div>
  );
}
