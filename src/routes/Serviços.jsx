import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GearSix, HardHat, HandCoins, HouseLine } from "@phosphor-icons/react"
import hvac from '../assets/services/hvac.webp'
import estrutura from '../assets/services/estrutura.webp'
import post from '../assets/services/post.webp'
import melhoria from '../assets/services/melhoria.webp'



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
      "Imagem representando um sistema HVAC"
    ),
    new Service(
      "Engenharia Estrutural",
      "Desenvolvemos projetos estruturais seguros e eficientes, utilizando as melhores práticas da engenharia para garantir a durabilidade e a resistência das construções.",
      <HardHat size={50} className="text-secondary" />,
      estrutura,
      "Imagem de um projeto de engenharia estrutural"
    ),
    new Service(
      "Melhoria do Local",
      "Implementamos melhorias em espaços industriais e comerciais, otimizando a infraestrutura para aumentar a produtividade e a segurança no local de trabalho.",
      <HandCoins size={50} className="text-secondary -rotate-10" />,
      melhoria,
      "Imagem ilustrando a melhoria do local"
    ),
    new Service(
      "Pós-Construção",
      "Oferecemos serviços de finalização e ajustes após a construção, incluindo acabamentos, inspeções e manutenção para garantir a qualidade do projeto concluído.",
      <HouseLine size={50} className="text-secondary" />,
      post,
      "Imagem de um edifício pós-construção"
    )
  ];





  return (
    <>
      <Navbar />
      <main className="w-full bg-primary flex flex-col items-center justify-center gap-10 min-h-screen">

        <h1 className="text-5xl text-center -mt-34 text-text circularBold">Fornecemos um serviço excelente <br /> para nossos clientes</h1>

        <div className="cards flex items-center justify-center gap-10 w-full">

          {services.map((servico, index) => (
            <div key={index} className="card flex flex-col transition-colors duration-300 hover:bg-terceary/50 shadow-2xl shadow-black bg-terceary w-90 h-100 rounded-2xl">

              <div className="px-5 py-7 gap-4 flex flex-col">

                <div className='icon select-none  ease-in-out outline outline-neutral-800 flex items-center justify-center h-18 w-18 bg-primary/40 rounded-lg'>

                  {servico.icon}

                </div>


                <div className="text flex flex-col gap-1 h-40 text-text">
                  <h2 className='title text-xl circularBold'>{servico.title}</h2>
                  <p className='description text-neutral-400 text-base titilliumRegular'>{servico.description}</p>
                </div>
              </div>
              <img src={servico.image} alt={servico.alt} className="w-full h-[50%] select-none object-cover rounded-lg" />
            </div>

          ))}


        </div>
      </main>
      <Footer />
    </>
  )
}

export default Serviços