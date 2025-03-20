import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-200 flex justify-between items-center p-6 py-4 shadow-md">
    <h1 className="text-2xl font-bold text-gray-500 mt-8">Mi aprendizaje</h1>
    <div className="flex items-center gap-4">
      <button className="text-gray-600 hover:text-gray-800">
        <FaBell size={22} />
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <FaUserCircle size={22} />
      </button>
    </div>
  </header>
  )
}
