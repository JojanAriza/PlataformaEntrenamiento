import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="bg-blue-800 text-white w-1/4 h-full flex flex-col items-center">

        <Link to='/' className="mb-6 text-center mt-10">
          
          <img
            src="/path-to-logo.png"
            alt="Logo"
            className="w-20 h-auto mb-4 mx-auto block"
          />
          </Link>
        <nav className="flex flex-col flex-grow mt-28 w-full">
          <a href="#profile" className="w-full py-5 px-5 bg-blue-700 hover:bg-blue-600  transition-colors border-t-2 border-gray-300">
            Mi perfil
          </a>
          <a href="#learning" className="w-full py-5 px-5 bg-blue-700 hover:bg-blue-600 transition-colors border-t-2 border-b-2 border-gray-300">
            Mi aprendizaje
          </a>
        </nav>

    </aside>
  )
}
