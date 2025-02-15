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
      <main className="Home bg-primary min-h-screen w-full pb-20">
        {/* Hero Section */}
        <article className="hero-section relative h-[50em]">
          {/* Background Overlay */}
          <div className="backgroundHome1 absolute inset-0 backdrop-brightness-50 before:pointer-events-none before:absolute before:top-0 before:left-0 before:h-full before:w-1/2 before:bg-gradient-to-r before:from-black/100 before:to-transparent after:absolute after:inset-0 after:bg-black/40"></div>

          {/* Hero Content */}
          <section className="relative z-10 flex h-full w-full flex-col justify-center gap-5 px-5 max-sm:mx-auto md:px-20">
            <h1 className="circularBold text-text text-4xl/tight md:text-5xl/tight md:text-nowrap">
              Construindo o Futuro, <br /> Tijolo por{" "}
              <span className="text-secondary">Tijolo</span>.
            </h1>
            <p className="text-text titilliumRegular flex w-full items-center justify-center text-base sm:w-1/2">
              A Construtora Nova Horizonte é especializada em construção civil,
              oferecendo serviços completos para projetos residenciais,
              comerciais e industriais. Nosso compromisso é com a qualidade,
              segurança e inovação em cada obra.
            </p>
            <nav className="buttons max-xs:flex-col mt-4 flex flex-row gap-8 max-sm:w-full">
              <Link
                className="group text-text circularBook bg-secondary hover:bg-secondary/70 flex h-11.5 w-32 transform items-center justify-center gap-2 rounded-2xl text-base transition-all duration-300 ease-in-out"
                to="/servicos"
                aria-label="Ir para página de serviços"
              >
                Serviços
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <ArrowCircleUpRight
                    size={27}
                    className="absolute transform transition-all duration-300 ease-in-out group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                className="group circularBook hover:bg-text/80 flex h-11.5 w-32 transform items-center justify-center gap-2 rounded-2xl bg-white text-base text-black transition-all duration-150"
                to="/obras"
                aria-label="Ir para página de projetos"
              >
                Projetos
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <ReadCvLogo
                    size={26}
                    className="absolute transform transition-all duration-300 ease-in-out group-hover:scale-105"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </nav>
          </section>

          {/* Features List */}
          <aside className="text-text absolute bottom-[-50px] left-[40%] z-99 flex h-40 w-fit -translate-x-1/2 -skew-1 transform items-center rounded-lg bg-orange-500 p-6 shadow-lg select-none max-md:hidden lg:left-[30%] lg:text-nowrap xl:left-[78%] xl:w-140">
            <ul className="circularBook flex flex-col gap-2" role="list">
              <li className="flex transform animate-pulse items-center gap-2 transition-all">
                <CheckCircle size={28} aria-hidden="true" /> Sistema de
                Qualidade Rigoroso, Garantia de Satisfação a 100%!
              </li>
              <li className="flex transform animate-pulse items-center gap-2 transition-all">
                <CheckCircle size={28} aria-hidden="true" /> Equipa Profissional
                Qualificada, Processos de Testes Precisos!
              </li>
              <li className="flex transform animate-pulse items-center gap-2 transition-all">
                <CheckCircle size={28} aria-hidden="true" /> Mão-de-obra
                Imbatível, Profissionais Certificados e Experientes!
              </li>
            </ul>
          </aside>
        </article>

        {/* About Section */}
        <article className="bg-primary flex h-full w-full max-w-screen flex-col items-center px-10 md:mt-10 lg:-mt-25 lg:pt-30">
          <AnimatedAside />
          <div className="relative flex w-full flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:px-20">
            <img
              src={peopleHome}
              loading="lazy"
              alt="Equipe da Construtora Nova Horizonte"
              className="h-auto object-cover select-none max-md:max-w-80 md:-mt-20 md:w-[50rem] lg:mt-0"
            />
            <div className="flex flex-col gap-5 max-md:mt-20">
              <h2 className="circularBold text-text text-center text-5xl md:text-6xl/15 md:text-nowrap lg:text-start">
                <span className="text-secondary">25 anos</span> <br /> de
                experiência!
              </h2>

              <div className="about-content mt-4 flex w-full flex-col items-center justify-center gap-2 lg:items-start lg:gap-0">
                <p className="text-text titilliumRegular w-fit text-center text-base italic md:w-[70%] lg:text-justify">
                  A Construtora Nova Horizonte é referência no mercado, com 25
                  anos de tradição que atestam nosso compromisso com a qualidade
                  e a confiança em todos os projetos de construção e reforma.
                </p>

                <p className="text-text titilliumRegular w-fit text-center text-base italic md:w-[70%] lg:text-justify">
                  Nossa equipe é composta por profissionais altamente
                  qualificados, cuja expertise e dedicação se traduzem em cada
                  projeto executado.
                </p>

                <p className="text-text titilliumRegular w-fit text-center text-base italic md:w-[70%] lg:text-justify">
                  Nós entendemos que cada obra é única, e por isso, adotamos uma
                  abordagem personalizada em cada etapa do processo.
                </p>

                <p className="text-text titilliumRegular w-fit text-center text-base italic md:w-[70%] lg:text-justify">
                  Seja na construção de imóveis residenciais, comerciais ou em
                  reformas que rejuvenescem espaços, nossa missão é transformar
                  cada projeto em realidade.
                </p>
              </div>

              <div className="flex w-full flex-col items-center justify-center pt-5 lg:items-start">
                <img
                  className="w-40 invert-100 select-none"
                  loading="lazy"
                  src={signature}
                  alt="Assinatura do fundador Esdras Santos"
                />
                <p className="text-text titilliumRegular mt-2 text-sm italic">
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
