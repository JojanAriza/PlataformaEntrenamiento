import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
export default function Layout() {
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
        <Outlet/>
        </main>
      </div>
    </div>
        <Footer />
  
  </div>
  )
}
