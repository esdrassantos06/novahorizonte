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
    new Step('Consulta & Planeamento',

      'Iniciamos com uma consulta detalhada para compreender a sua visão, orçamento e objetivos do projeto. A nossa equipa trabalha consigo para desenvolver um plano personalizado.',

      <Hammer color="#FF7420" size={45} />),


    new Step('Design & Pré-Construção',

      'Transformamos a sua ideia num conceito concreto, desenvolvendo esboços, modelos e planeamentos técnicos. Cuidamos de todas as aprovações e preparações necessárias antes do início da construção.',

      <LightbulbFilament color="#FF7420" size={45} />),


    new Step('Construção & Entrega',

      'Damos vida ao projeto com uma execução precisa e controlada. Utilizamos materiais de qualidade e seguimos as melhores práticas para garantir durabilidade, segurança e excelência na construção.',

      <HandWithdraw color="#FF7420" size={45} />),
  ]




  return (
    <>
      <Navbar />
      <main className="bg-primary min-h-screen w-full lg:pt-20 pt-40">


        <section className="about-us-container px-10 py-20 lg:px-20 gap-10 relative pb-60 flex items-center justify-center md:flex-nowrap md:flex-row flex-col lg:h-[84vh] h-screen w-full">

          <div className="part-1 flex h-full basis-1/2 items-start">
            <div className="flex w-full flex-col items-center justify-center lg:pt-18">
              <div className="title-about-us mb-10">
                <h1 className="text-text circularBold text-6xl">
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

          <div className="titilliumRegular part-2 flex basis-1/2 mb-40 lg:mb-0 items-center justify-center">
            <div className="shadow-secondary/20 flex xl:h-150 xl:w-150 lg:w-120 lg:h-120 h-100 w-100 flex-col items-center justify-center rounded-lg shadow-2xl select-none">
              <img
                src={photo1}
                className="h-full w-full rounded-lg object-cover inset-shadow-sm inset-shadow-black"
                alt="Duas pessoas na construção"
              />
            </div>
          </div>
        </section>

        <div className="absolute w-full lg:bottom-20 -bottom-18">
          <ScrollComponent />
        </div>

        <section className="our-mission-container bg-secondary flex lg:flex-row flex-col-reverse pt-40 h-screen w-full items-center justify-center">

          <div className="titilliumRegular part-1 flex basis-1/2 items-center justify-end pr-20">
            <div className="shadow-secondary/20 flex xl:h-180 xl:w-180 lg:w-150 lg:h-150 h-120 w-120 flex-col items-center justify-center rounded-lg shadow-2xl select-none">
              <img
                src={photo2}
                loading="lazy"
                className="h-full w-full rounded-lg object-cover inset-shadow-sm inset-shadow-black"
                alt="Foto de uma pessoa segurando uma chave de construção"
              />
            </div>
          </div>

          <div className="bg-secondary part-2 flex h-full w-full pt-10 basis-1/2 flex-col items-center justify-center">

            <div className="title-mission flex items-center lg:items-start justify-center w-full flex-col gap-3 pt-4">
              <h2 className="text-primary titilliumBold text-lg">
                COMO TRABALHAMOS?
              </h2>
              <h1 className="text-text circularBold text-5xl">
                Como Trabalhar com <br /> a Nova Horizonte
              </h1>
            </div>

            <div className="mt-10 flex w-full flex-col gap-10">

              {passos.map((passo, index) => (
                <div className={`modo${index + 1} relative flex h-40 w-full items-center justify-center gap-10 `} key={index}>

                  <div className={`icon-${index + 1}`}>
                    <div className="absolute top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-2xl shadow-black outline outline-zinc-500/50 select-none">
                      <span className="text-secondary circularBook">{index + 1}</span>
                    </div>
                    <div className="icon flex h-25 w-25 items-center justify-center rounded-full bg-white p-2">
                      {passo.icon}
                    </div>
                  </div> {/* Icon */}

                  <div className="flex flex-col gap-2">
                    <h2 className="text-text  circularBold text-2xl">
                      {passo.title}
                    </h2>
                    <p className="titilliumRegular w-[80%] text-base text-slate-200">
                      {passo.description}
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>

        </section>



        <section className="our-team-container bg-primary flex h-screen w-full flex-col items-center justify-center gap-4">
          <div className="bg-primary shadow-primary flex w-[80vw] h-full flex-col items-center justify-center rounded-lg p-10 shadow-2xl">
            <div className="title-our-team ml-60 flex w-full items-center justify-start py-4">
              <h1 className="text-text circularBold text-center text-5xl">
                Uma Equipa Dedicada de Profissionais Qualificados <br />{" "}
                Comprometidos com a{" "}
                <span className="text-secondary">Excelência</span>
              </h1>
            </div>

            <Equipa />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default QuemSomos;
