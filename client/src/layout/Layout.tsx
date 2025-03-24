import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Sidebar, Links } from "./Sidebar";
import { Header } from "./Header";

export type LayoutProps = {
  pages: Links;
  startPage: number;
};

class InvalidIndexError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvInvalidIndexError";
  }
}

export const Layout: React.FC<LayoutProps> = ({ pages, startPage }) => {
  const startPageIsValid = startPage >= 0 && startPage < pages.length;
  if (!startPageIsValid) {
    const wrongPage = startPage;
    startPage = 0;
    throw new InvalidIndexError(
      `La página de inicio ${wrongPage} no es válida`
    );
  }

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <div
        style={{ gridTemplateColumns: "1fr 3fr" }}
        className="grid grid-cols-['1fr 3fr'] grid-rows-1 flex-grow min-h-screen"
      >
        <Sidebar pages={pages} />
        <div className="flex-1 flex flex-col">
          <Header label={pages[startPage].label} />
          <main className="flex-1 flex justify-start h-fit overflow-auto bg-gray-100 w-screen md:w-full md:100%">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
