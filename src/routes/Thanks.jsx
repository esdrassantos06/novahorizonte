import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <>
      <main className="bg-primary -mb-72 flex min-h-screen w-full flex-col justify-center">
        <div className="backgroundThanks absolute inset-0 backdrop-brightness-50 before:pointer-events-none before:absolute before:top-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r before:from-black/100 before:to-transparent after:absolute after:inset-0 after:bg-black/40"></div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center space-y-5">
          <h1 className="text-text titilliumBold text-6xl">
            Recebemos a sua <span className="text-secondary">mensagem</span>.
          </h1>
          <p className="text-text titilliumRegular">
            Em breve entraremos em contacto consigo para marcar uma conversa
            pessoalmente!
          </p>
          <Link
            to="/contact"
            className="text-text titilliumBold bg-secondary hover:bg-secondary/70 flex h-10 w-30 items-center justify-center rounded-lg text-nowrap"
          >
            Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Thanks;
