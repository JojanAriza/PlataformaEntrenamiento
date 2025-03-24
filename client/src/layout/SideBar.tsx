import { Link } from "react-router-dom";
export type Links = { label: string; url: string }[];
export type SidebarProps = { pages: Links };

class NoPagesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NoPagesError";
  }
}

export const Sidebar: React.FC<SidebarProps> = ({ pages }) => {
  if (pages.length == 0) {
    throw new NoPagesError(
      "Se debe pasar al menos un link para la creación del sidebar"
    );
  }

  return (
    <aside className="bg-darkBlue text-white h-full w-full  grid-rows-5">
      <Link to="/" className="mb-6 text-center mt-10 row-span-1">
        <img
          src="../../../public/esri_paises.png"
          alt="Logo"
          className="mt-12 w-[245px] h-auto mb-4 mx-auto block"
        />
      </Link>

      <nav className="row-start-2 row-end-6 flex flex-col flex-grow mt-28 w-full">
        {pages.map(({ label, url }) => (
          <a
            href={url}
            className="w-full py-5 px-12 text-xl  bg-lightBlue hover:bg-darkBlue transition-colors border-b-[1px]"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};
