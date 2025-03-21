export default function Footer() {
    return (
        <footer className="bg-deepBlue text-white text-sm p-8 w-full mt-auto ">
            <div className="flex justify-between items-center">
                <p className="text-[10px] leading-normal">
                    Bogotá | (1) 650 1550 - Cll. 90 # 14 - 40 - Cali | (2) 489 0617 | Av. 4 Norte # 7N - 46 Local 335 Oficina 8 -
                    Medellín | (4) 226 6657 | Cll. 16 # 41 - 210<br />
                    Esri.co | Unsubscribe | Actualizar mis preferencias | ¿Necesita una cotización? Agende una cita telefónica<br />
                    Copyright © 2020 Esri Colombia. Todos los derechos reservados.
                </p>
                <div className="flex gap-4 text-xs  justify-center">
                    <a href="#learn" className="hover:underline">
                        Learn ArcGIS
                    </a>
                    <a href="#academy" className="hover:underline">
                        Esri Academy
                    </a>
                    <a href="#schedule" className="hover:underline">
                        Cronograma
                    </a>
                    <a href="#catalog" className="hover:underline">
                        Catálogo
                    </a>
                </div>
            </div>
        </footer>
    )
}
