import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    // <aside className="bg-blue-800 text-white w-1/4 h-full flex flex-col items-center">
    <aside className="bg-darkBlue text-white h-full w-full  grid-rows-5">
        <Link to='/' className="mb-6 text-center mt-10 row-span-1">
          <img
            src="../../../public/esri_paises.png"
            alt="Logo"
            className="w-[245px] h-auto mb-4 mx-auto block"
          />
        </Link>
        <nav className="row-start-2 row-end-6 flex flex-col flex-grow mt-28 w-full">
          <a href="#profile" className="w-full py-5 px-12 text-xl  bg-lightBlue hover:bg-darkBlue border-t-[0.5px] border-b-[1px] transition-colors">
            Mi perfil
          </a>
          <a href="#learning" className="w-full py-5 px-12 text-xl  bg-lightBlue hover:bg-darkBlue transition-colors border-b-[1px]">
            Mi aprendizaje
          </a>
        </nav>

    </aside>
  )
}
