import CourseCard from "./CourseCard";
import { curso } from "@/models/curso";

type MosaicParams = { cursos: curso[] };

class EmptyList extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmptyList";
  }
}

export default function CourseMosaic({ cursos }: MosaicParams) {
  // console.log(cursos);
  if (cursos.length == 0)
    throw new EmptyList(
      "Se debe pasar al menos un curso para construir el mosaico"
    );

  return (
    <div className="py-6 px-0 md:px-4 w-full flex justify-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6 justify-items-center w-full">
        {cursos.map((curso) => (
          <CourseCard {...curso} key={curso.id}></CourseCard>
        ))}
      </div>
    </div>
  );
}
