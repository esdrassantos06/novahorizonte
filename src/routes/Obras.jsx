import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testemunhas from "../components/Testemunhas";
import Projetos from "../components/Projetos";

function Obras() {
  return (
    <>
      <Navbar />

      <main className="Obras bg-secondary flex min-h-screen w-full flex-col items-center pt-40">
        <div className="flex w-full flex-col items-center pb-10 gap-5">
          <div className="TitleObras w-full text-center mb-10">
            <h1 className="text-primary circularBold text-5xl">
              Obras Em <span className="text-text">Destaque</span>
            </h1>
          </div>

          <Projetos />
        </div>

        <div className="bg-primary flex h-[40em] w-full flex-col items-center justify-center gap-5 pt-10">
          <div className="pb-5">
            <h1 className="text-secondary titilliumBold text-5xl">
              Opniões de nossos clientes
            </h1>
          </div>

          <Testemunhas />
        </div>
      </main>
      <Footer />

  
    </>
  );
}

export default Obras;
