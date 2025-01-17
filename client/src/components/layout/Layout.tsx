import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Contenedor del contenido principal */}
      <div className="flex flex-grow">
        {/* Sidebar con altura controlada por el contenedor */}
        <SideBar />

        {/* Contenedor principal con los demás componentes */}
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto bg-gray-100">
            {children}
          </main>
        </div>
      </div>
          <Footer />
    
    </div>
  );
};

export default Layout;
