type ProfileDetailsProps = {
    username: string;
    fullName: string;
    email: string;
    country: string;
    city: string;
    idNumber: string;
    phoneNumber: string;
};
export default function ProfileDetails({
    username,
    fullName,
    email,
    country,
    city,
    idNumber,
    phoneNumber,
}: ProfileDetailsProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 h-auto w-full">
            {/* Imagen de perfil */}
            <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                MB
            </div>

            {/* Nombre de usuario */}
            <h2 className="text-xl font-semibold">NOMBRE DE USUARIO</h2>
            <p className="text-gray-600 mb-4">Detalles del perfil</p>

            {/* Tabla de detalles */}
            <div className="w-full max-w-lg border border-gray-300 bg-white">
                {[
                    { label: "Nombre de usuario:", value: username },
                    { label: "Nombre y apellido:", value: fullName },
                    { label: "Correo electrónico:", value: email },
                    { label: "País:", value: country },
                    { label: "Ciudad:", value: city },
                    { label: "Identificación:", value: idNumber },
                    { label: "Número celular:", value: phoneNumber },
                ].map((item, index) => (
                    <div key={index} className={`grid grid-cols-2 border-gray-300 ${index !== 6 ? "border-b" : ""}`}>
                        <div className="p-2 font-semibold border-r border-gray-300">{item.label}</div>
                        <div className="p-2">{item.value}</div>
                    </div>
                ))}
            </div>

            {/* Botón de editar perfil */}
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Editar perfil
            </button>
        </div>
    );
}
