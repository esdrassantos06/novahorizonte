import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AnimatedAside from "../components/AnimatedAside"
import { ReadCvLogo ,CheckCircle, ArrowCircleUpRight } from '@phosphor-icons/react'
import peopleHome from '../assets/images/PeopleHome.png'
import signature from '../assets/images/signature.png'

function Home() {

    return (
        <>
            <Navbar />
            <main className="w-full bg-primary  min-h-screen">
                <section className="hero-section relative h-[50em]">

                    <div className="backgroundHome1 absolute inset-0 backdrop-brightness-50 
        before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full 
        before:bg-gradient-to-r before:from-black/100 before:to-transparent 
        before:pointer-events-none 
        after:absolute after:inset-0 after:bg-black/40">
                    </div>

                    {/* Container do conteúdo sem sombra */}
                    <div className="container relative z-10 px-20 flex space-y-5 flex-col justify-center h-full">
                        <h1 className="text-5xl/tight  circularBold text-text">
                            Construindo o Futuro, <br /> Tijolo por <span className="text-secondary">Tijolo</span>.
                        </h1>
                        <p className="text-text w-1/2 text-base titilliumRegular">
                            A Construtora Nova Horizonte é especializada em construção civil, oferecendo serviços completos para projetos residenciais, comerciais e industriais. Nosso compromisso é com a qualidade, segurança e inovação em cada obra.
                        </p>
                        <div className="buttons mt-4 gap-8 flex">
                            <Link
                                className="group text-text flex items-center gap-2 text-base px-4 py-2 circularBook transition-all duration-300 ease-in-out transform bg-secondary hover:bg-amber-700 rounded-2xl"
                                to="/servicos"
                            >
                                Serviços
                                <span className="relative w-7 h-7 flex items-center justify-center">
                                    <ArrowCircleUpRight
                                        size={27}
                                        className="absolute transition-all duration-300 ease-in-out transform group-hover:rotate-45"
                                    />
                                </span>
                            </Link>



                            <Link className="text-black gap-2 group  transform flex items-center justify-center px-4 py-2 text-base circularBook p-1 border border-gray-800 bg-white transition-all duration-150 hover:bg-gray-300 rounded-2xl" to='/obras'>
                                Projetos
                                
                                <span className="relative w-7 h-7 flex items-center justify-center">
                                    <ReadCvLogo
                                        size={26}
                                        className="absolute transition-all duration-300 ease-in-out transform group-hover:scale-105"
                                    />
                                </span>
                                </Link>


                        </div>
                    </div>
                    <div className="absolute select-none left-[80%] transform z-40 -skew-1 -translate-x-1/2 bottom-[-50px] w-fit text-nowrap bg-orange-500 text-text p-6 rounded-lg shadow-lg">
                        <ul className="space-y-2 circularBook">
                            <li className="flex items-center  animate-pulse transform transition-all gap-2">
                                <CheckCircle size={28} /> Sistema de Qualidade Rigoroso, Garantia de Satisfação a 100%!
                            </li>
                            <li className="flex items-center animate-pulse transform transition-all  gap-2">
                                <CheckCircle size={28} /> Equipa Profissional Altamente Qualificada, Processos de Testes Precisos!
                            </li>
                            <li className="flex items-center animate-pulse transform transition-all  gap-2">
                                <CheckCircle size={28} /> Mão-de-obra Imbatível, Profissionais Certificados e Experientes!
                            </li>
                        </ul>

                    </div>
                </section>
                <AnimatedAside />
                <section className="w-full block-appear bg-primary flex items-center p-30 h-screen">
                    <div className="container space-x-20 relative px-20 flex flex-row items-center justify-between">
                        <img src={peopleHome} alt="Construtora" className="w-[50rem] select-none h-auto" />
                        <div className="space-y-5">
                            <h1 className="text-6xl/15 circularBold text-text"><span className="text-secondary">25 anos</span> <br /> de experiência!</h1>


                            <p className="mt-4 w-full text-start text-text italic titilliumRegular text-base">
                                A Construtora Nova Horizonte é referência no mercado, com 25 anos de tradição que atestam nosso compromisso com a qualidade e a confiança em todos os projetos de construção e reforma. Desde a nossa fundação, trabalhamos incansavelmente para oferecer soluções que atendam não apenas às necessidades estruturais, mas que também reflitam o sonho e a visão de nossos clientes.
                            </p>

                            <p className="text-start w-full  text-text italic titilliumRegular text-base mt-2">
                                Nossa equipe é composta por profissionais altamente qualificados, cuja expertise e dedicação se traduzem em cada projeto executado. Estamos constantemente atualizados com as últimas tendências e técnicas do setor, garantindo que cada obra seja realizada com os melhores materiais e práticas da construção civil.
                            </p>

                            <p className="text-start w-full  text-text italic titilliumRegular text-base mt-2">
                                Nós entendemos que cada obra é única, e por isso, adotamos uma abordagem personalizada em cada etapa do processo. Desde o primeiro contato, ouvimos atentamente as necessidades e expectativas de nossos clientes, proporcionando um atendimento que prioriza a satisfação e a confiança.
                            </p>

                            <p className="text-start w-full text-text italic titilliumRegular text-base mt-2">
                                Seja na construção de imóveis residenciais, comerciais ou em reformas que rejuvenescem espaços, nossa missão é transformar cada projeto em realidade, sem abrir mão da qualidade e da segurança. Acreditamos que a transparência e a comunicação são fundamentais para construir relacionamentos sólidos e duradouros.
                            </p>

                            <div className="pt-5">
                                <img className="invert-100 w-40 select-none" src={signature} alt="assinatura" />
                                <p className="text-start w-full text-text italic titilliumRegular text-sm mt-2">Esdras Santos - Fundador</p>
                            </div>


                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home