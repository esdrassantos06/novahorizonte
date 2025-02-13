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
      <main className="bg-primary flex min-h-screen w-full flex-col items-center justify-center gap-10 max-md:pt-70">
        <h1 className="text-text circularBold -mt-34 text-center text-5xl">
          Fornecemos um serviço excelente <br /> para nossos clientes
        </h1>

        <div className="cards flex w-full flex-col items-center justify-center gap-40 md:flex-row md:gap-10">
          {services.map((servico, index) => (
            <div
              key={index}
              className="card hover:bg-terceary/50 bg-terceary relative flex h-fit w-60 flex-col rounded-2xl shadow-xl shadow-black transition-all duration-300 hover:shadow-2xl md:h-100 md:w-90"
            >
              <div className="flex flex-col gap-4 px-5 py-7 pb-60">
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
                className="absolute -bottom-20 h-[50%] w-full rounded-lg object-cover select-none"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Serviços;
