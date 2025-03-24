import { cursos as testCourses } from "../data/cursos";
import Pagination from "../components/Course/Pagination";
import SearchBar from "../components/Course/SearchBar";
import CourseMosaic from "./CourseMosaic";

export default function MiAprendizaje() {
  const handleSearch = (searchTerm: string) => {
    console.log("Buscar: ", searchTerm);
  };

  console.log(`Cursos de prueba cargados: ${testCourses}`);

  return (
    <div
      className="py-6 px-5 w-full 
        md:px-16"
    >
      <SearchBar onSearch={handleSearch} />
      <CourseMosaic cursos={testCourses} />
      <Pagination />
    </div>
  );
}
