import { cursos } from "../data/cursos";
import Pagination from "../components/Course/Pagination"
import SearchBar from "../components/Course/SearchBar"
import CourseRow from "../components/CourseRow";

export default function CourseList() {
    const handleSearch = (searchTerm:string) => {
        console.log("Buscar: ", searchTerm);
        // Aquí puedes implementar la lógica de búsqueda si lo necesitas
      };
    return (
        <div className="py-6 px-10 space-y-2 w-full">
            <SearchBar onSearch={handleSearch} />
            {cursos.map((curso) => (
                <CourseRow {...curso} key={curso.id}></CourseRow>
            ))}
             <Pagination/>
        </div>
    );
}
