import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import CourseMosaic from "@/pages/estudiante/pages/miAprendizaje/components/CourseMosaic";
import { curso } from "@/models/curso";
import { useEffect, useState } from "react";
import getStudentCourses from "@/services/getCourses";

export default function MiAprendizaje() {
  const [cursos, setCursos] = useState<curso[]>([])
  const handleSearch = (searchTerm: string) => {
    console.log("Buscar: ", searchTerm);
  };

  useEffect(()=>{
    getStudentCourses('').then(setCursos)
  })

  return (
    <div
      className="py-6 px-5 w-full 
        md:px-16"
    >
      <SearchBar onSearch={handleSearch} />
      <CourseMosaic cursos={cursos} />
      <Pagination />
    </div>
  );
}
