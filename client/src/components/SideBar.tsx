import { Link } from "react-router-dom";
export type Links = { label: string; url: string }[];
export type SidebarProps = { pages: Links };
import { FaBars } from "react-icons/fa";
import { useState } from "react";

class NoPagesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NoPagesError";
  }
}

export const Sidebar: React.FC<SidebarProps> = ({ pages }) => {
  let [show, setShow] = useState(true);

  if (pages.length == 0) {
    throw new NoPagesError(
      "Se debe pasar al menos un link para la creación del sidebar"
    );
  }

  const handleClick = () =>{
    setShow(!show)
  }

  return (
    <aside
      className="absolute z-10 left-6 top-14 bg-red text-white
    md:static md:bg-darkBlue md:text-white md:h-full md:w-full md:grid-rows-5"
    >
      {/* Logo de ESRI, vista desktop */}
      <Link
        to="/"
        className="hidden mb-6 text-center mt-10 row-span-1 md:block"
      >
        <img
          src="../../../public/esri_paises.png"
          alt="Logo"
          className="mt-12 w-[245px] h-auto mb-4 mx-auto block"
        />
      </Link>

      {/* Menú hamburguesa, vista mobile  */}
      <FaBars className="md:hidden" size={25} onClick={handleClick}/>
      {show ? (
        <nav
          className="relative -top-3 left-3 flex flex-col w-full divide-y-[1px]
        md:static md:row-start-2 md:row-end-6 md:mt-28 md:border-b-[1px]"
        >
          {pages.map(({ label, url }, idx) => (
            <a
              key={idx}
              href={url}
              className="
              first:border-t-[1px] p-4 bg-deeperGray border-superDeepGray text-center
              md:border-white md:w-full md:py-5 md:px-12 md:text-xl  md:bg-lightBlue 
              md:hover:bg-darkBlue md:transition-colors md:text-left md:border-b-[1px]"
            >
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </aside>
  );
};
