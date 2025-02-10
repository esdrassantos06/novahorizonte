import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GearSix, HardHat, HandCoins, HouseLine } from "@phosphor-icons/react"
import hvac from '../assets/services/hvac.webp'
import estrutura from '../assets/services/estrutura.webp'
import post from '../assets/services/post.webp'
import melhoria from '../assets/services/melhoria.webp'



function Serviços() {


  const services = [
    {
      title: "Instalação de HVAC",
      description: "Oferecemos soluções especializadas para a instalação e manutenção de sistemas de aquecimento, ventilação e ar-condicionado, garantindo eficiência e conforto para o seu ambiente.",
      icon: <GearSix size={50} className="text-secondary" />,
      image: hvac
    },
    {
      title: "Engenharia Estrutural",
      description: "Desenvolvemos projetos estruturais seguros e eficientes, utilizando as melhores práticas da engenharia para garantir a durabilidade e a resistência das construções.",
      icon: <HardHat size={50} className="text-secondary" />,
      image: estrutura

    },
    {
      title: "Melhoria do Local",
      description: "Implementamos melhorias em espaços industriais e comerciais, otimizando a infraestrutura para aumentar a produtividade e a segurança no local de trabalho.",
      icon: <HandCoins size={50} className="text-secondary -rotate-10" />,
      image: melhoria
    },
    {
      title: "Pós-Construção",
      description: "Oferecemos serviços de finalização e ajustes após a construção, incluindo acabamentos, inspeções e manutenção para garantir a qualidade do projeto concluído.",
      icon: <HouseLine size={50} className="text-secondary" />,
      image: post
    }
  ];




  return (
    <>
      <Navbar />
      <main className="w-full bg-primary flex flex-col items-center justify-center gap-10 min-h-screen">

        <h1 className="text-5xl text-center text-text circularBold">Fornecemos um serviço excelente <br /> para nossos clientes</h1>

        <div className="cards flex items-center justify-center gap-10 w-full">

          {services.map((servico, index) => (
            <div key={index} className="card flex flex-col bg-quaternary w-90 h-100 rounded-2xl">

              <div className="px-5 py-7 gap-4 flex flex-col">

                <div className='icon select-none outline outline-neutral-800 flex items-center justify-center h-18 w-18 bg-primary/40 rounded-lg'>

                  {servico.icon}

                </div>


                <div className="text flex flex-col gap-1 h-40 text-text">
                  <h2 className='title text-xl circularBold'>{servico.title}</h2>
                  <p className='description text-neutral-400 text-base titilliumRegular'>{servico.description}</p>
                </div>
              </div>
              <img src={servico.image} alt="" className="w-full h-[60%] select-none object-cover rounded-lg" />
            </div>

          ))}


        </div>
      </main>
      <Footer />
    </>
  )
}

export default Serviços