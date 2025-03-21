import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div style={{gridTemplateColumns: '1fr 3fr'}} className="grid grid-cols-['1fr 3fr'] grid-rows-1 flex-grow min-h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 flex justify-start h-fit overflow-auto bg-gray-100">
            <Outlet/>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
