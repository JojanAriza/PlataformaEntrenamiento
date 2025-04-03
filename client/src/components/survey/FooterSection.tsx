import { Link } from "react-router-dom";

export default function FooterSection() {
    return (
      <div className="bg-gray-200 p-4 text-center">
        <Link
          to='/'
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          &lt;&lt; Volver mi aprendizaje
        </Link>
      </div>
    );
  }
  