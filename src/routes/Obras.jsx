import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testemunhas from "../components/Testemunhas";
import Projetos from "../components/Projetos";

function Obras() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-20 flex flex-col items-center bg-secondary min-h-screen">
        <div className="p-20 flex flex-col items-center w-full">
          <div className="TitleObras mb-10">
            <h1 className="text-primary text-5xl circularBold">
              Obras Em <span className="text-text">Destaque</span>
            </h1>
          </div>

          <Projetos />
        </div>

        <div className="flex w-full flex-col gap-5 pt-20 items-center justify-center bg-primary h-[40em]">
          <div className="pb-5">
            <h1 className="text-5xl text-secondary titilliumBold">
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
