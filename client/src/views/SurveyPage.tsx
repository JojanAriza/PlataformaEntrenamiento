import HeaderSection from "../components/survey/HeaderSection";
import SurveySection from "../components/survey/SurveySection";
import FooterSection from "../components/survey/FooterSection";

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
