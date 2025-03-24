import { FaBell, FaUserCircle } from "react-icons/fa";

type HeaderParams = {
  label: string,
}

export const Header:React.FC<HeaderParams> = ({label}) => {
  return (
    <header className="bg-darkGray flex justify-between items-center p-6 py-4 shadow-md">
    <h1 className="text-4xl font-bold text-superDeepGray mt-16 mb-6 ml-6">{label}</h1>
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
