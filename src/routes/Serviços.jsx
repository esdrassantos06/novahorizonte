import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GearSix, HardHat, HandCoins, HouseLine } from "@phosphor-icons/react";
import hvac from "../assets/services/hvac.webp";
import estrutura from "../assets/services/estrutura.webp";
import post from "../assets/services/post.webp";
import melhoria from "../assets/services/melhoria.webp";

function Serviços() {
  class Service {
    constructor(title, description, icon, image, alt) {
      this.title = title;
      this.description = description;
      this.icon = icon;
      this.image = image;
      this.alt = alt;
    }
  }

  const services = [
    new Service(
      "Instalação de HVAC",
      "Oferecemos soluções especializadas para a instalação e manutenção de sistemas de aquecimento, ventilação e ar-condicionado, garantindo eficiência e conforto para o seu ambiente.",
      <GearSix size={50} className="text-secondary" />,
      hvac,
      "Imagem representando um sistema HVAC",
    ),
    new Service(
      "Engenharia Estrutural",
      "Desenvolvemos projetos estruturais seguros e eficientes, utilizando as melhores práticas da engenharia para garantir a durabilidade e a resistência das construções.",
      <HardHat size={50} className="text-secondary" />,
      estrutura,
      "Imagem de um projeto de engenharia estrutural",
    ),
    new Service(
      "Melhoria do Local",
      "Implementamos melhorias em espaços industriais e comerciais, otimizando a infraestrutura para aumentar a produtividade e a segurança no local de trabalho.",
      <HandCoins size={50} className="text-secondary -rotate-10" />,
      melhoria,
      "Imagem ilustrando a melhoria do local",
    ),
    new Service(
      "Pós-Construção",
      "Oferecemos serviços de finalização e ajustes após a construção, incluindo acabamentos, inspeções e manutenção para garantir a qualidade do projeto concluído.",
      <HouseLine size={50} className="text-secondary" />,
      post,
      "Imagem de um edifício pós-construção",
    ),
  ];

  return (
    <>
      <Navbar />
      <main className="Serviços bg-primary flex min-h-screen w-full flex-col items-center pt-30 gap-10">
        <h1 className="text-text circularBold text-center text-5xl">
          Fornecemos um serviço excelente <br /> para nossos clientes
        </h1>

        <div className="cards  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-10 items-center justify-center">
          {services.map((servico, index) => (
            <div
              key={index}
              className="card hover:bg-terceary/50 bg-terceary relative flex flex-col rounded-2xl shadow-xl shadow-black transition-all duration-300 hover:shadow-2xl w-60 md:w-100"
            >


              <div className="flex flex-col gap-4 h-100 px-5 py-7">
                <div className="icon bg-primary/40 flex items-center justify-center rounded-lg outline outline-neutral-800 ease-in-out select-none md:h-18 md:w-18">
                  {servico.icon}
                </div>

                <div className="text text-text flex h-40 flex-col gap-1 pb-20">
                  <h2 className="title circularBold text-xl">
                    {servico.title}
                  </h2>
                  <p className="description titilliumRegular text-base text-neutral-400">
                    {servico.description}
                  </p>
                </div>
              </div>
              <img
                src={servico.image}
                alt={servico.alt}
                className="absolute -bottom-40 h-60 w-full rounded-lg object-cover select-none"
              />
            </div>
          ))}
        </div> {/* cards */}

      </main>
      <Footer />
    </>
  );
}

export default Serviços;
