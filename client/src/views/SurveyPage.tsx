import HeaderSection from "../components/survey/HeaderSection";
import SurveySection from "../components/survey/SurveySection";
import FooterSection from "../components/survey/FooterSection";
import Buttons from "../components/survey/Buttons";
import { useState } from "react";
import SurveyComments from "../components/survey/SurveyComment";

export default function SurveyPage() {
  const instructorQuestions = [
    "El instructor dominó el tema",
    "El instructor tiene las habilidades necesarias para transmitir las temáticas del curso.",
    "El instructor motivó al grupo a participar en las actividades propuestas.",
  ];
  const classQuestions = [
    "La organización de la sesión (duración, convocatoria, etc) fue idónea ",
    "La maquina suministrada permitió desarrollar todos los ejercicios del curso",
    "Los materiales (Libro PDF y datos) son apropiados para el aprendizaje de la temática.",
  ];

  const commentQuestions = [
    { question: "Me siento capacitado para aplicar lo aprendido", scale: 5 },
    { question: "¿Qué tan probable es que recomiende nuestros cursos a un amigo o colega?", scale: 5 }
];

  const [step, setStep] = useState(1);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        {/* Franja Azul */}
        <HeaderSection />

        {step === 1 && (
          <div>
            <SurveySection
              questions={instructorQuestions}
              commentLabel="¿Qué comentarios le gustaría compartir con nosotros sobre el instructor?"
              description="De las afirmaciones indique qué tan de acuerdo está, donde 1 es muy en desacuerdo y 5 muy de acuerdo:"
              title="Instructor"
            />
            <Buttons showExtraButton={false} setStep={setStep} step={step} />
          </div>
        )}

        {step === 2 && (
          <div>
            <SurveySection
              questions={classQuestions}
              commentLabel="¿Qué comentarios le gustaría compartir con nosotros sobre la clase?"
              description="De las siguientes afirmaciones con el aula virtual, indique su nivel de satisfaccion, donde 1 es muy en desacuerdo y 5 muy de acuerdo:"
              title="Clase"
            />
            <Buttons showExtraButton={true} setStep={setStep} step={step} />
          </div>
        )}
        {step === 3 && (
          <div>
            <SurveyComments
              questions={commentQuestions}
              commentLabel="¿Qué comentarios adicionales le gustaría compartir con nosotros?"
              permissionLabel="¿Tiene mi permiso para usar y distribuir mi información en material promocional?"
            />
            <Buttons showExtraButton={true} setStep={setStep} step={step} />
          </div>
        )}

        {/* Pie de Página */}
        <FooterSection onGoBack={() => console.log("Volver a aprendizaje")} />
      </div>
    </div>
  );
}
