type ButtonsProps = {
  showExtraButton?: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>
  step: number
};



export default function Buttons({ showExtraButton, setStep, step }: ButtonsProps) {
  return (
    <div className="flex gap-3 mt-6 mb-6 justify-center">
      {showExtraButton && (
        <div className="flex justify-center">
          <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700" onClick={() => setStep(step - 1)}>
            Atras
          </button>
        </div>
      )}
      {/* Botón */}
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700" onClick={() => setStep(step + 1)}>
          Siguiente &gt;&gt;
        </button>
      </div>
    </div>
  );
}
