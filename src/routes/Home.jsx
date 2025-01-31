import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AnimatedAside from "../components/AnimatedAside"
import { ArrowCircleRight, CheckCircle } from '@phosphor-icons/react'
import peopleHome from '../assets/images/PeopleHome.png'

function Home() {
    return (
        <>
            <Navbar />
            <main className="w-full bg-primary  min-h-screen">
                <section className="hero-section relative h-[50em]">

                    {/* Div para o background com sombra e overlay escuro */}
                    <div className="backgroundHome1 absolute inset-0 backdrop-brightness-50 
        before:absolute before:top-0 before:left-0 before:w-1/3 before:h-full 
        before:bg-gradient-to-r before:from-black/100 before:to-transparent 
        before:pointer-events-none 
        after:absolute after:inset-0 after:bg-black/40">
                    </div>

                    {/* Container do conteúdo sem sombra */}
                    <div className="container relative z-10 px-20 flex space-y-5 flex-col justify-center h-full">
                        <h1 className="text-5xl/tight  circularBold text-white">
                            Construindo o Futuro, <br /> Tijolo por <span className="text-secondary">Tijolo</span>.
                        </h1>
                        <p className="text-white w-1/2 titilliumRegular">
                            A Construtora Nova Horizonte é especializada em construção civil, oferecendo serviços completos para projetos residenciais, comerciais e industriais. Nosso compromisso é com a qualidade, segurança e inovação em cada obra.
                        </p>
                        <div className="buttons mt-4 space-x-15 flex">
                            <Link className="text-white flex items-center gap-2 text-base circularMedium px-2 py-3 transition-all duration-150 transform hover:scale-105 bg-secondary hover:bg-amber-700 rounded-lg" to='/servicos'>Nossos Serviços <ArrowCircleRight size={28}/> </Link>


                            <Link className="text-black  transform hover:scale-105 flex items-center text-base circularMedium px-2 py-3 bg-white transition-all duration-150 hover:bg-gray-400 rounded-lg" to='/obras'>
                            <p>Veja Nossos Projetos</p></Link>
                        </div>
                    </div>
                    <div className="absolute select-none left-[80%] transform z-40 -skew-1 -translate-x-1/2 bottom-[-50px] w-fit text-nowrap bg-orange-500 text-white p-6 rounded-lg shadow-lg">
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
                <section className="w-full bg-primary flex items-center p-30 h-screen">
                    <div className="container space-x-20 relative px-20 flex flex-row items-center justify-between">
                        <img src={peopleHome} alt="Construtora" className="w-[45rem] select-none h-auto" />
                        <div>
                            <h1 className="text-6xl/15 circularBold text-white"><span className="text-secondary">25 anos</span> <br /> de experiência!</h1>


                            <p className="mt-4 w-full text-start text-white italic titilliumRegular text-base">
                                A Construtora Nova Horizonte é referência no mercado, com 25 anos de tradição que atestam nosso compromisso com a qualidade e a confiança em todos os projetos de construção e reforma. Desde a nossa fundação, trabalhamos incansavelmente para oferecer soluções que atendam não apenas às necessidades estruturais, mas que também reflitam o sonho e a visão de nossos clientes.
                            </p>

                            <p className="text-start w-full text-white italic titilliumRegular text-base mt-2">
                                Nossa equipe é composta por profissionais altamente qualificados, cuja expertise e dedicação se traduzem em cada projeto executado. Estamos constantemente atualizados com as últimas tendências e técnicas do setor, garantindo que cada obra seja realizada com os melhores materiais e práticas da construção civil.
                            </p>

                            <p className="text-start w-full text-white italic titilliumRegular text-base mt-2">
                                Nós entendemos que cada obra é única, e por isso, adotamos uma abordagem personalizada em cada etapa do processo. Desde o primeiro contato, ouvimos atentamente as necessidades e expectativas de nossos clientes, proporcionando um atendimento que prioriza a satisfação e a confiança.
                            </p>

                            <p className="text-start w-full text-white italic titilliumRegular text-base mt-2">
                                Seja na construção de imóveis residenciais, comerciais ou em reformas que rejuvenescem espaços, nossa missão é transformar cada projeto em realidade, sem abrir mão da qualidade e da segurança. Acreditamos que a transparência e a comunicação são fundamentais para construir relacionamentos sólidos e duradouros.
                            </p>




                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home