import { curso } from "@/models/curso";
import { Link } from "react-router-dom"
export default function CourseCard({ id, tipo, titulo, estado, color }: curso) {
  // const imgUrl = "../../placeholder.png";
  return (
    <>
      <Link
        key={id}
        className="group bg-deepGray rounded-b-lg overflow-hidden border border-gray-200 max-w-56
        md:rounded-b-2xl"
        to={"/student/detail"}
      >
        <div className="relative">
          {/* <img
              src={imgUrl}
              alt={titulo}
              className="h-[70px] w-full object-cover bg-white"
            /> */}

          <div className="h-[70px] border-solid border-[1.5px] border-deepGray w-full bg-white flex justify-center items-center text-center">
            <p className="h-8 text-center text-lightGray font-semibold">
              Image
            </p>
          </div>

          {/* Tipo  */}
          <div
            className={`absolute bottom-[-16px] px-4 md:py-2 min-w-20 md:min-w-32 box-border rounded-md 
                      text-white text-center text-base font-semibold ${color} group-hover:bg-superLightBlue`}
          >
            {tipo}
          </div>
        </div>

        {/* Contenido del curso */}
        <div className="flex flex-col justify-between pt-6 md:px-6 px-1 md:pb-4 pb-2 group-hover:bg-brightBlue">
          <h3 className="md:text-base text-[0.7rem] font-semibold  text-deadGray group-hover:text-white">
            {titulo}
          </h3>
          <p className="md:text-xs text-[0.6rem] text-600 text-azulito font-bold italic">
            {estado}
          </p>
        </div>
      </Link>
    </>
  );
}
