import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollComponent from "../components/ScrollComponent"
import photo1 from '../assets/images/01.webp'
import photo2 from '../assets/images/HowWeWork.jpg'
import { Hammer, LightbulbFilament, HandWithdraw } from "@phosphor-icons/react"
import Equipa from "../components/Equipa"

function QuemSomos() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-primary pt-20 min-h-screen">
        <section className="about-us-container flex w-full h-[84vh]">
          <div className="basis-1/2 p-36 flex items-start h-full part-1">
            <div className="w-full pt-18 flex flex-col items-center justify-center">
              <div className="title-about-us mb-10">
                <h1 className="text-text circularBold text-6xl">Sobre <span className="text-secondary">Nós</span></h1>
              </div>
              <div className="text-text flex flex-col gap-2 text-base titilliumRegular paragraph-about-us">

                <p className="text-justify">Na Construtora Nova Horizonte, acreditamos que cada obra é mais do que uma estrutura física; é a materialização de sonhos, a base de futuros promissores. Com mais de 25 anos de experiência no mercado de construção civil, nos destacamos pela excelência, compromisso com prazos e qualidade incomparável.</p>

                <p className="text-justify">Nosso compromisso vai além da construção: buscamos inovar, sustentar e entregar soluções que respeitem o meio ambiente e promovam o desenvolvimento das comunidades onde atuamos. Na Nova Horizonte, estamos Construindo o Futuro, <strong>Tijolo por Tijolo</strong>.</p>
              </div>

            </div>
          </div>



          <div className="basis-1/2 flex justify-start pl-5 items-center titilliumRegular part-2">
            <div className="w-150 select-none h-150 flex flex-col items-center justify-center shadow-2xl shadow-secondary/20  rounded-lg">

              <img src={photo1} className="w-full inset-shadow-sm inset-shadow-black  h-full object-cover rounded-lg" alt="Foto de uma pessoa segurando uma chave de construção" />
            </div>
          </div>

        </section>

        <div className="mb-2">
          <ScrollComponent />
        </div>




        <section className="our-mission-container w-full flex bg-secondary justify-center items-center h-screen">
          <div className="basis-1/2 flex pr-20 justify-end items-center titilliumRegular part-2">
            <div className="w-180 select-none h-180 flex flex-col items-center justify-center shadow-2xl shadow-secondary/20  rounded-lg">

              <img src={photo2} className="w-full inset-shadow-sm inset-shadow-black  h-full object-cover rounded-lg" alt="Foto de uma pessoa segurando uma chave de construção" />
            </div>
          </div>

          <div className="basis-1/2 h-full bg-secondary flex flex-col justify-center items-center">

            <div className="title-mission flex flex-col gap-3 w-full ">
              <h2 className="text-primary titilliumBold text-lg">COMO TRABALHAMOS?</h2>
              <h1 className="text-text w-[60%] text-5xl circularBold">Como Trabalhar com a Nova Horizonte</h1>
            </div>

            <div className="flex flex-col gap-10 w-full px-10 mt-10">


              <div className="modo1 flex items-center justify-center gap-10 relative w-full h-40">

                <div className="icon-1">
                  <div className="absolute top-6 select-none outline shadow-2xl shadow-black outline-zinc-500/50 flex w-9 h-9 rounded-full bg-white justify-center items-center">
                    <span className="text-secondary circularBook">1</span>
                  </div>
                  <div className="icon-hammer bg-white w-25 h-25 p-2 flex justify-center items-center rounded-full">
                    <Hammer color="#FF7420" size={45} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl text-text circularBold">Consulta & Planeamento</h2>
                  <p className="titilliumRegular text-slate-200 w-[80%] text-base">Iniciamos com uma consulta detalhada para compreender a sua visão, orçamento e objetivos do projeto. A nossa equipa trabalha consigo para desenvolver um plano personalizado.</p>
                </div>
              </div>

              <div className="modo2 flex items-center justify-center gap-10 relative w-full h-40">

                <div className="icon-1">
                  <div className="absolute top-6 select-none outline shadow-2xl shadow-black outline-zinc-500/50 flex w-9 h-9 rounded-full bg-white justify-center items-center">
                    <span className="text-secondary circularBook">2</span>
                  </div>
                  <div className="icon-hammer bg-white w-25 h-25 p-2 flex justify-center items-center rounded-full">
                    <LightbulbFilament color="#FF7420" size={45} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl text-text circularBold">Design & Pré-Construção</h2>
                  <p className="titilliumRegular text-slate-200 w-[80%] text-base">Transformamos a sua ideia num conceito concreto, desenvolvendo esboços, modelos e planeamentos técnicos. Cuidamos de todas as aprovações e preparações necessárias antes do início da construção.</p>
                </div>
              </div>

              <div className="modo3 flex items-center justify-center gap-10 relative w-full h-40">

                <div className="icon-1">
                  <div className="absolute top-6 select-none outline shadow-2xl shadow-black outline-zinc-500/50 flex w-9 h-9 rounded-full bg-white justify-center items-center">
                    <span className="text-secondary circularBook">3</span>
                  </div>
                  <div className="icon-hammer bg-white w-25 h-25 p-2 flex justify-center items-center rounded-full">
                    <HandWithdraw color="#FF7420" size={45} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl text-text circularBold">Construção & Entrega</h2>
                  <p className="titilliumRegular text-slate-200 w-[80%] text-base">Damos vida ao projeto com uma execução precisa e controlada. Utilizamos materiais de qualidade e seguimos as melhores práticas para garantir durabilidade, segurança e excelência na construção.</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="our-team-container w-full flex flex-col justify-center gap-4 bg-tertiary items-center h-[80vh]">


          <div className="flex flex-col bg-primary shadow-2xl shadow-primary rounded-lg p-10 items-center justify-center w-[80vw]">
            <div className="title-our-team py-10 flex items-center justify-center w-full">
              <h1 className="text-text circularBold text-4xl">Uma Equipa Dedicada de Profissionais Qualificados <br/> Comprometidos com a <span className="text-secondary">Excelência</span></h1>
            </div>

            <Equipa />
          </div>

        </section>


      </main>
      <Footer />
    </>
  )
}

export default QuemSomos