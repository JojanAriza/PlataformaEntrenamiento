import { FaBell, FaUserCircle } from "react-icons/fa";

type HeaderParams = {
  label: string;
};

export const Header: React.FC<HeaderParams> = ({ label }) => {
  return (
    <header className="bg-deeperGray flex justify-between items-center p-6 py-4 w-screen md:w-full text-white h-36 relative
    md:bg-darkGray">
      <div className="phantom md:hidden bg-transparent">
        {/* <FaBars size={25}/> */}
      </div>
      <h1 className="absolute justify-self-center left-[50%] right-[50%] w-full self-end text-xl text-center text-white font-semibold
      md:font-bold md:static md:left-0 md:right-0 md:w-fit md:text-superDeepGray md:mt-16 md:mb-6 md:ml-6 md:text-4xl ">
        {label}
      </h1>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell size={22} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaUserCircle size={22} />
        </button>
      </div>
    </header>
  );
};
