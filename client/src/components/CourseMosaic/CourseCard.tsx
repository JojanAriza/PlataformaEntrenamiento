import { curso } from "../../data/cursos";

export default function CourseCard({ id, tipo, titulo, estado, color }: curso) {
  // const imgUrl = "../../placeholder.png";
  return (
    <>
      <div
        key={id}
        className="group bg-deepGray rounded-b-2xl overflow-hidden border border-gray-200 max-w-56"
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
            className={`absolute bottom-[-16px] px-4 py-2 min-w-32 box-border rounded-md 
                      text-white text-center text-base font-semibold ${color} group-hover:bg-superLightBlue`}
          >
            {tipo}
          </div>
        </div>

        {/* Contenido del curso */}
        <div className="pt-6 px-6 pb-4 group-hover:bg-brightBlue">
          <h3 className="text-base font-semibold  mb-2 text-deadGray group-hover:text-white">{titulo}</h3>
          <p className="text-xs text-600 text-azulito font-bold italic">
            {estado}
          </p>
        </div>
      </div>
    </>
  );
}
