type SurveyCommentsProps = {
    questions: { question: string; scale: number }[];
    commentLabel: string;
    permissionLabel: string;
};

export default function SurveyComments({
    questions,
    commentLabel,
    permissionLabel,
}: SurveyCommentsProps) {
    const colors = ["bg-red-600", "bg-orange-600", "bg-violet-600", "bg-blue-600", "bg-green-600"];

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">Comentarios</h2>
            {questions.map((item, index) => (
                <div key={index} className="mb-6">
                    <p className="font-semibold">{item.question}</p>
                    <p className="text-gray-700 mb-3">En una calificación de 1 a {item.scale}, donde {item.scale} significa completamente capacitado y 1 absolutamente no</p>
                    <div className="grid grid-cols-5  w-full">
                        {[...Array(item.scale)].map((_, idx) => (
                            <div key={idx} className="flex flex-col items-center w-full border border-gray-300">
                                <label className={`w-full text-center py-2 ${colors[idx % colors.length]} text-white font-bold border-b border-gray-300`}>{idx + 1}</label>
                                <input type="radio" name={`question-${index}`} value={idx + 1} className="mt-2 mb-2" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="mt-6">
                <label htmlFor="comments" className="block font-semibold mb-2">
                    {commentLabel}
                </label>
                <textarea id="comments" className="w-full border border-gray-300 rounded-lg p-3 h-20" rows={4} placeholder="Escribe aquí tus comentarios"></textarea>
            </div>

            <div className="mt-4">
                <p className="font-semibold mb-2">{permissionLabel}</p>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="permission" value="yes" className="form-radio" /> Sí
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="permission" value="no" className="form-radio" /> No
                    </label>
                </div>
            </div>

        </div>
    );
}
