type buttonTheme = "light-gray" | "red" | "dark-gray" | "vivid-blue" | "blue";
type buttonParams = {
  theme?: buttonTheme;
  text?: string;
};

export default function SquareButton({ theme = "light-gray", text }: buttonParams) {
  const themes = {
    "light-gray": "bg-darkGray text-white p-2 hover:bg-darkBlue ",
    "dark-gray": "bg-superDeepGray text-white hover:bg-superDeepGray ",
    red: "bg-brightRed text-white hover:bg-darkRed",
    "vivid-blue": "bg-azulito text-white hover:bg-deepBlue",
    blue: "bg-lightBlue text-white hover:bg-celeste",
  };
  const themeClass = themes[theme] || "light-gray";
  return (
    <>
      <button
        className={`h-8 min-w-16 px-3 py-1 ml-3 p-2 transition ${themeClass}`}
      >
        {text}
      </button>
    </>
  );
}
