import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* Contenedor del contenido principal */}
      {/* <div className="flex flex-grow min-h-screen"> */}
      <div style={{gridTemplateColumns: '1fr 3fr'}} className="grid grid-cols-['1fr 3fr'] grid-rows-1 flex-grow min-h-screen">
        {/* Sidebar con altura controlada por el contenedor */}
        <SideBar />

        {/* Contenedor principal con los demás componentes */}
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 flex justify-start h-fit overflow-auto bg-gray-100">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
