import HeaderSection from "./HeaderSection";
import SurveySection from "./SurveySection";
import FooterSection from "./FooterSection";

export default function SurveyPage() {
  const questions = [
    "El instructor dominó el tema",
    "El instructor tiene las habilidades necesarias para transmitir las temáticas del curso.",
    "El instructor motivó al grupo a participar en las actividades propuestas.",
  ];

  return (
    <div className="flex flex-col">
      {/* Franja Azul */}
      <HeaderSection/>

      {/* Encuesta */}
      <SurveySection
        questions={questions}
        commentLabel="¿Qué comentarios le gustaría compartir con nosotros sobre el instructor?"
      />

      {/* Pie de Página */}
      <FooterSection onGoBack={() => console.log("Volver a aprendizaje")} />
    </div>
  );
}
