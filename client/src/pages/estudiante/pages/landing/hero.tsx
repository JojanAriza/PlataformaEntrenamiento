
export default function hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center p-24"
      style={{ backgroundImage: "url('/fondo_banner.png')" }}
    >

{/* Contenido principal */}
<div className="relative z-10 max-w-4xl px-6 text-white text-left">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Portal de estudiantes
  </h1>
  <p className="text-lg md:text-xl mb-8 max-w-lg">
    Bienvenido al portal de estudiantes del centro autorizado de entrenamiento
    Esri Colombia, Ecuador y Panamá. Aquí podrás seguir tu progreso académico, 
    acceder a todo el material de estudio y descargar tus certificados.
  </p>

  {/* Botones verticales */}
  <div className="flex flex-col space-y-4 items-start">
    <button className="bg-blue-500 text-white  font-semibold py-2 px-5 rounded-lg hover:bg-gray-100 transition w-auto">
      Iniciar sesión &gt;&gt;
    </button>
    <button className=" bg-gray-400 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-600 transition w-auto">
      Crear cuenta &gt;&gt;
    </button>
  </div>
</div>

    </section>
  )
}
