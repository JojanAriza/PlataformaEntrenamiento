type SurveySectionProps = {
    questions: string[];
    commentLabel: string;
};

export default function SurveySection({
    questions,
    commentLabel,
}: SurveySectionProps) {
    // Colores para los números
    const colors = ["bg-red-600", "bg-orange-600", "bg-violet-600", "bg-blue-600", "bg-green-600"]; // Rojo, Naranja, Amarillo, Azul, Verde

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4 ">Instructor</h2>
            <p className="text-gray-700 mb-6 ">
                De las afirmaciones indique qué tan de acuerdo está, donde 1 es muy en
                desacuerdo y 5 muy de acuerdo:
            </p>

            {/* Encabezado compacto para los números */}
            <div className="grid grid-cols-[1fr_auto] gap-2 items-center mb-2">
                <div></div> {/* Espacio vacío para alinear las preguntas */}
                <div className="flex ml-auto">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <span
                            key={value}
                            className={`${colors[index]} font-bold text-white py-0.5 text-xs rounded text-center`}
                            style={{ minWidth: "30px", maxWidth: "30px" }}
                        >
                            {value}
                        </span>
                    ))}
                </div>
            </div>




            {/* Preguntas y opciones */}
            <div className="space-y-4">
                {questions.map((question, index) => (
                    <div key={index} className="flex items-center">
                        <p className="flex-1">{question}</p>
                        <div className="grid grid-cols-5 gap-4">
                            {[1, 2, 3, 4, 5].map((value, idx) => (
                                <label
                                    key={value}
                                    className="flex items-center justify-center"
                                    style={{ color: colors[idx] }}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={value}
                                        className="form-radio text-blue-500"
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Comentarios */}
            <div className="mt-6">
                <label htmlFor="comments" className="block font-semibold mb-2">
                    {commentLabel}
                </label>
                <textarea
                    id="comments"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    rows={4}
                    placeholder="Escribe aquí tus comentarios"
                ></textarea>
            </div>

            {/* Botón */}
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Siguiente &gt;&gt;
            </button>
        </div>
    );
}
