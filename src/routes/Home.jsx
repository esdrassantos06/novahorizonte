import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedAside from "../components/AnimatedAside";
import {
  ReadCvLogo,
  CheckCircle,
  ArrowCircleUpRight,
} from "@phosphor-icons/react";
import peopleHome from "../assets/images/PeopleHome.webp";
import signature from "../assets/images/signature.webp";

function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pb-20 bg-primary min-h-screen">
        {/* Hero Section */}
        <article className="hero-section relative h-[50em]">
          {/* Background Overlay */}
          <div
            className="backgroundHome1 absolute inset-0 backdrop-brightness-50 
                        before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full 
                        before:bg-gradient-to-r before:from-black/100 before:to-transparent 
                        before:pointer-events-none 
                        after:absolute after:inset-0 after:bg-black/40"
          ></div>

          {/* Hero Content */}
          <section className="relative z-10 md:px-20 px-5 flex gap-5 flex-col justify-center max-sm:mx-auto w-full h-full">
            <h1 className="md:text-5xl/tight text-4xl/tight md:text-nowrap circularBold text-text">
              Construindo o Futuro, <br /> Tijolo por{" "}
              <span className="text-secondary">Tijolo</span>.
            </h1>
            <p className="text-text sm:w-1/2 w-full flex items-center justify-center text-base titilliumRegular">
              A Construtora Nova Horizonte é especializada em construção civil,
              oferecendo serviços completos para projetos residenciais,
              comerciais e industriais. Nosso compromisso é com a qualidade,
              segurança e inovação em cada obra.
            </p>
            <nav className="buttons mt-4 max-sm:w-full gap-8 flex flex-row max-xs:flex-col">
              <Link
                className="group text-text flex items-center justify-center gap-2 text-base w-32 h-11.5 circularBook transition-all duration-300 ease-in-out transform bg-secondary hover:bg-secondary/70 rounded-2xl"
                to="/servicos"
                aria-label="Ir para página de serviços"
              >
                Serviços
                <span className="relative w-7 h-7 flex items-center justify-center">
                  <ArrowCircleUpRight
                    size={27}
                    className="absolute transition-all duration-300 ease-in-out transform group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                className="text-black gap-2 group transform flex items-center justify-center w-32 h-11.5 text-base circularBook bg-white transition-all duration-150 hover:bg-text/80 rounded-2xl"
                to="/obras"
                aria-label="Ir para página de projetos"
              >
                Projetos
                <span className="relative w-7 h-7 flex items-center justify-center">
                  <ReadCvLogo
                    size={26}
                    className="absolute transition-all duration-300 ease-in-out transform group-hover:scale-105"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </nav>
          </section>

          {/* Features List */}
          <aside className="absolute flex max-md:hidden items-center select-none xl:left-[78%] lg:left-[30%] left-[40%] h-40 transform z-99 -skew-1 -translate-x-1/2 bottom-[-50px] w-fit xl:w-140 lg:text-nowrap bg-orange-500 text-text p-6 rounded-lg shadow-lg">
            <ul className="gap-2 flex flex-col circularBook" role="list">
              <li className="flex items-center animate-pulse transform transition-all gap-2">
                <CheckCircle size={28} aria-hidden="true" /> Sistema de
                Qualidade Rigoroso, Garantia de Satisfação a 100%!
              </li>
              <li className="flex items-center animate-pulse transform transition-all gap-2">
                <CheckCircle size={28} aria-hidden="true" /> Equipa Profissional
                Qualificada, Processos de Testes Precisos!
              </li>
              <li className="flex items-center animate-pulse transform transition-all gap-2">
                <CheckCircle size={28} aria-hidden="true" /> Mão-de-obra
                Imbatível, Profissionais Certificados e Experientes!
              </li>
            </ul>
          </aside>
        </article>


        {/* About Section */}
        <article className="w-full flex-col max-w-screen bg-primary flex items-center lg:-mt-25 md:mt-10 lg:pt-30 px-10 h-full">
        <AnimatedAside />
          <div className="gap-20 relative lg:px-20 flex-col-reverse flex lg:flex-row items-center justify-center w-full">
            <img
              src={peopleHome}
              loading="lazy"
              alt="Equipe da Construtora Nova Horizonte"
              className="md:w-[50rem] max-md:max-w-80 md:-mt-20 lg:mt-0 select-none h-auto object-cover"
            />
            <div className="flex flex-col max-md:mt-20 gap-5">
              <h2 className="md:text-6xl/15 text-5xl text-center lg:text-start md:text-nowrap circularBold text-text">
                <span className="text-secondary">25 anos</span> <br /> de
                experiência!
              </h2>

              <div className="about-content mt-4 flex flex-col gap-2 lg:gap-0 lg:items-start items-center w-full justify-center">
                <p className="w-fit md:w-[70%] lg:text-justify text-center text-text italic titilliumRegular text-base">
                  A Construtora Nova Horizonte é referência no mercado, com 25
                  anos de tradição que atestam nosso compromisso com a qualidade
                  e a confiança em todos os projetos de construção e reforma.
                </p>

                <p className="w-fit md:w-[70%] lg:text-justify text-center  text-text italic titilliumRegular text-base ">
                  Nossa equipe é composta por profissionais altamente
                  qualificados, cuja expertise e dedicação se traduzem em cada
                  projeto executado.
                </p>

                <p className="lg:text-justify text-center w-fit md:w-[70%] text-text italic titilliumRegular text-base">
                  Nós entendemos que cada obra é única, e por isso, adotamos uma
                  abordagem personalizada em cada etapa do processo.
                </p>

                <p className="lg:text-justify text-center w-fit md:w-[70%] text-text italic titilliumRegular text-base">
                  Seja na construção de imóveis residenciais, comerciais ou em
                  reformas que rejuvenescem espaços, nossa missão é transformar
                  cada projeto em realidade.
                </p>
              </div>

              <div className="pt-5 w-full flex flex-col items-center lg:items-start justify-center">
                <img
                  className="invert-100 w-40 select-none"
                  loading="lazy"
                  src={signature}
                  alt="Assinatura do fundador Esdras Santos"
                />
                <p className="text-text italic titilliumRegular text-sm mt-2">
                  Esdras Santos - Fundador
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
