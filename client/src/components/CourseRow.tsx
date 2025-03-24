import { curso } from "../data/cursos";
import { Link } from "react-router-dom"

export default function CourseRow({ id, color, tipo, titulo, estado }: curso) {
  return (
    <div>
      <div
        key={id}
        className="h-14 w-full flex items-center justify-between bg-[#cccccc] p-4 mb-2 border border-gray-300 relative"
      >
        <div className={`absolute top-0 left-0 h-full ${color} w-4 `}></div>

        <div className="flex items-center space-x-4 flex-grow-0 pl-6 pr-6">
          <div className={`w-28 py-2 text-left font-regular`}>{tipo}</div>
          <h3 className="text-xs font-bold text-deadGray">{titulo}</h3>
        </div>

        <div className="flex space-x-4 items-center ml-auto text-right">
          <p className="text-base font-bold italic text-blue-500">{estado}</p>

          <Link 
            className="border-none bg-[#949494] hover:bg-brightBlue text-white font-semibold text-base py-1 px-10 rounded-full transition"
            to={"/student/detail"}
          >
            Ver &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
