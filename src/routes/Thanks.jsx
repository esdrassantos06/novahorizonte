import Footer from "../components/Footer";

const Thanks = () => {
  return (
    <>
      <main className="w-full min-h-screen -mb-72 flex flex-col justify-center bg-primary">
        <div
          className="backgroundThanks absolute inset-0 backdrop-brightness-50 
                    before:absolute before:top-0 before:left-0 before:w-1/3 before:h-full 
                    before:bg-gradient-to-r before:from-black/100 before:to-transparent 
                    before:pointer-events-none 
                    after:absolute after:inset-0 after:bg-black/40"
        ></div>

        <div className="container relative z-10 pl-44 flex space-y-5 flex-col justify-center">
          <h1 className="text-6xl text-text titilliumBold">
            Recebemos a sua <span className="text-secondary">mensagem</span>.
          </h1>
          <p className="text-text titilliumRegular">
            Em breve entraremos em contacto consigo para marcar uma conversa
            pessoalmente!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Thanks;
