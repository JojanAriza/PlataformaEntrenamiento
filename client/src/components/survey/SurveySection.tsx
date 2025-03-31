type SurveySectionProps = {
    questions: string[];
    commentLabel: string;
    description: string;
    title: string
};

export default function SurveySection({questions, commentLabel, description, title}: SurveySectionProps) {
    // Colores para los números
    const colors = ["bg-red-600", "bg-orange-600", "bg-violet-600", "bg-blue-600", "bg-green-600"]; // Rojo, Naranja, Amarillo, Azul, Verde

    return (
      <div className="p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 ">{title}</h2>
        <p className="text-gray-700 mb-6 ">
          {description}
        </p>

        <div className="bg-gray-300">
          <div className="grid grid-cols-[1fr_auto] items-center h-12">
            {/* Espacio vacío estilizado para alinear las preguntas */}
            <div className="bg-gray-300 h-full w-full"></div>

            {/* Números coloridos */}
            <div className="flex ml-auto h-full">
              {[1, 2, 3, 4, 5].map((value, index) => (
                <span
                  key={value}
                  className={`${colors[index]} font-bold text-white py-3 text-sm text-center flex items-center justify-center`}
                  style={{ width: "50px", height: "50px", fontSize: "1rem" }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Preguntas y opciones */}

          <div className="space-y-2 mt-1">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center bg-gray-200 w-full">
                <p
                  className=" flex flex-1 items-center p-2"
                  style={{ height: "50px" }}
                >
                  {question}
                </p>
                <div className="grid grid-cols-5">
                  {[1, 2, 3, 4, 5].map((value, idx) => (
                    <label
                      key={value}
                      className="flex items-center justify-center border border-gray-300"
                      style={{
                        color: colors[idx],
                        width: "50px", // Ancho igual a los números
                        height: "50px",
                      }}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={value}
                        className="form-radio"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

      </div>
    );
}
