type FooterSectionProps = {
    onGoBack: () => void;
  };
export default function FooterSection({ onGoBack }: FooterSectionProps) {
    return (
      <div className="bg-gray-200 p-4 text-center">
        <button
          onClick={onGoBack}
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          &lt;&lt; Volver mi aprendizaje
        </button>
      </div>
    );
  }
  