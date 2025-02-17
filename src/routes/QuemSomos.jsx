import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollComponent from "../components/ScrollComponent";
import photo1 from "../assets/images/01.webp";
import photo2 from "../assets/images/HowWeWork.webp";
import { Hammer, LightbulbFilament, HandWithdraw } from "@phosphor-icons/react";
import Equipa from "../components/Equipa";

function QuemSomos() {
  class Step {
    constructor(title, description, icon) {
      this.title = title;
      this.description = description;
      this.icon = icon;
    }
  }

  const passos = [
    new Step(
      "Consulta & Planeamento",

      "Iniciamos com uma consulta detalhada para compreender a sua visão, orçamento e objetivos do projeto. A nossa equipa trabalha consigo para desenvolver um plano personalizado.",

      <Hammer color="#FF7420" size={45} />,
    ),

    new Step(
      "Design & Pré-Construção",

      "Transformamos a sua ideia num conceito concreto, desenvolvendo esboços, modelos e planeamentos técnicos. Cuidamos de todas as aprovações e preparações necessárias antes do início da construção.",

      <LightbulbFilament color="#FF7420" size={45} />,
    ),

    new Step(
      "Construção & Entrega",

      "Damos vida ao projeto com uma execução precisa e controlada. Utilizamos materiais de qualidade e seguimos as melhores práticas para garantir durabilidade, segurança e excelência na construção.",

      <HandWithdraw color="#FF7420" size={45} />,
    ),
  ];

  return (
    <>
      <Navbar />
      <main className="Quem-Somos bg-primary min-h-screen w-full pt-20">
        <section className="about-us-container relative flex h-fit w-full flex-col items-center justify-center gap-10 px-10 py-20 pb-60 md:flex-row md:flex-nowrap lg:px-20 xl:h-[84vh]">
          <div className="part-1 flex h-full basis-1/2 items-center">
            <div className="flex w-full flex-col items-center justify-center lg:pt-18">
              <div className="title-about-us mb-10">
                <h1 className="text-text circularBold text-5xl text-nowrap md:text-6xl">
                  Sobre <span className="text-secondary">Nós</span>
                </h1>
              </div>
              <div className="text-text titilliumRegular paragraph-about-us flex flex-col gap-2 text-base">
                <p className="text-justify">
                  Na Construtora Nova Horizonte, acreditamos que cada obra é
                  mais do que uma estrutura física; é a materialização de
                  sonhos, a base de futuros promissores. Com mais de 25 anos de
                  experiência no mercado de construção civil, nos destacamos
                  pela excelência, compromisso com prazos e qualidade
                  incomparável.
                </p>

                <p className="text-justify">
                  Nosso compromisso vai além da construção: buscamos inovar,
                  sustentar e entregar soluções que respeitem o meio ambiente e
                  promovam o desenvolvimento das comunidades onde atuamos. Na
                  Nova Horizonte, estamos Construindo o Futuro,{" "}
                  <strong>Tijolo por Tijolo</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="titilliumRegular part-2 flex basis-1/2 items-center justify-center">
            <div className="shadow-secondary/20 flex h-auto w-full max-w-screen flex-col items-center justify-center rounded-lg shadow-2xl select-none sm:w-[80%]">
              <img
                src={photo1}
                className="h-full w-full rounded-lg object-cover inset-shadow-sm inset-shadow-black"
                alt="Duas pessoas na construção"
              />
            </div>
          </div>

          <div className="absolute bottom-2 sm:w-full">
            <ScrollComponent />
          </div>
        </section>

        <section className="our-mission-container bg-secondary flex h-fit flex-col-reverse items-center justify-center py-10 lg:flex-row 2xl:h-screen">
          <div className="titilliumRegular part-1 flex basis-1/2 items-center justify-center max-lg:mt-30">
            <div className="shadow-secondary/20 flex h-90 w-90 max-w-screen flex-col items-center justify-center rounded-lg shadow-2xl select-none md:h-120 md:w-120 lg:h-150 lg:w-150 xl:h-full">
              <img
                src={photo2}
                loading="lazy"
                className="h-full rounded-lg object-cover"
                alt="Foto de uma pessoa segurando uma chave de construção"
              />
            </div>
          </div>

          <div className="bg-secondary part-2 flex basis-1/2 flex-col">
            <div className="title-mission flex w-full flex-col items-center justify-center gap-3 lg:items-start">
              <h2 className="text-primary titilliumBold text-lg">
                COMO TRABALHAMOS?
              </h2>
              <h1 className="text-text circularBold text-center text-4xl md:text-5xl lg:text-start">
                Como Trabalhar com <br /> a Nova Horizonte
              </h1>
            </div>

            <div className="how-to-work max-lg:mt-10 max-lg:space-y-20 lg:space-y-5">
              {passos.map((passo, index) => (
                <div
                  className={`modo${index + 1} flex w-full items-center justify-center gap-10 lg:h-50 lg:justify-start`}
                  key={index}
                >
                  <div className="icon relative flex h-20 w-20 items-center justify-center rounded-full bg-white p-2 sm:h-25 sm:w-25">
                    {passo.icon}

                    <div className={`icon-${index + 1}`}>
                      <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-2xl shadow-black outline outline-zinc-500/50 select-none sm:h-9 sm:w-9">
                        <span className="text-secondary circularBook">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Icon */}
                  <div className="flex w-[60%] flex-col gap-2">
                    <h2 className="text-text circularBold text-xl sm:text-2xl">
                      {passo.title}
                    </h2>
                    <p className="titilliumRegular text-base text-slate-200">
                      {passo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="our-team-container bg-primary mt-10 flex w-full flex-col items-center justify-center lg:h-screen">
          <div className="title-our-team flex w-full items-center justify-center py-4">
            <h1 className="text-text circularBold text-center text-4xl lg:text-5xl">
              Uma Equipa Dedicada de Profissionais Qualificados <br />{" "}
              Comprometidos com a{" "}
              <span className="text-secondary">Excelência</span>
            </h1>
          </div>
          <Equipa />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default QuemSomos;
