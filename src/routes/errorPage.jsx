import "../App.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="circularBlack text-9xl text-gray-800">404</h1>
      <h2 className="circularMedium mb-4 text-4xl text-gray-600">
        Página Não Encontrada
      </h2>
      <p className="circularBook mb-8 text-gray-500">
        A página que procura não existe ou foi movida.
      </p>

      <Link
        className="text-text circularMedium hover:bg-primary flex transform items-center gap-2 rounded-lg bg-black px-2 py-3 text-lg transition-all duration-150 hover:scale-105"
        to="/"
        aria-label="Voltar ao início"
      >
        Voltar ao início
      </Link>
    </div>
  );
};

export default ErrorPage;
