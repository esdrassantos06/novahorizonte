import { CaretUp } from "@phosphor-icons/react"
import { Link, useLocation } from "react-router-dom"


const Footer = () => {


    const location = useLocation();


    return (
        <footer className="relative w-full h-80 bg-primary text-text p-4 flex flex-col justify-between items-center">


            <div className="flex w-full flex-col items-center justify-center">

                <div className="principal-footer  flex border-b border-gray-600/70 space-y-6 pb-5 flex-col">

                    <Link to='/' aria-label="Logo da Empresa" className="logo-footer cursor-pointer select-none flex flex-col text-start -space-y-1 self-start">
                        <p className='montserrat text-base'>Construtora</p>
                        <p className='montserrat text-nowrap text-lg font-bold'>Nova <span className='text-secondary'>Horizonte</span></p>
                    </Link>

                    <div className="everything-footer gap-16 flex">

                        <div className="aboutus-and-icons">
                            <div className="aboutUS titilliumSemiBold mb-4 gap-4 text-start flex flex-col items-start self-center">
                                <h2 className="text-lg">Sobre Nós</h2>
                                <p className="w-[24rem] titilliumRegular text-sm">A Construtora Nova Horizonte é especialista em construção civil, oferecendo soluções completas e personalizadas para projetos residenciais, comerciais e industriais.</p>
                            </div>

                            <div className="icons flex items-center gap-4">
                                <a href="https://linkedin.com" className="p-2 group bg-secondary rounded-full" target="_blank" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white/70" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                                    </svg>
                                </a>

                                <a href="https://instagram.com" className="p-2 group bg-secondary rounded-full" target="_blank" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white/70" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M16.5 7.5v.01" />
                                    </svg>
                                </a>

                                <a href="https://X.com" className="p-2 group bg-secondary rounded-full" target="_blank" aria-label="X (Twitter)">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white/70" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                </a>

                                <a href="https://facebook.com" className="p-2 group bg-secondary rounded-full" target="_blank" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white/70" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 9v4h2v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                    </svg>
                                </a>


                            </div>
                        </div>



                        <div className="flex titilliumSemiBold gap-4 text-start flex-col items-start self-stretch">
                            <h2 className="text-lg">Escritório</h2>
                            <p className="w-[10rem] titilliumRegular text-sm">Avenida dos Construtores, 456, Porto, Portugal</p>
                        </div>

                        <div className="flex titilliumSemiBold gap-2 text-start flex-col items-start self-stretch">
                            <h2 className="text-lg">Contacto</h2>
                            <p className="w-[15rem] titilliumRegular text-sm">novahorizonteempresa@gmail.com</p>
                            <p className="w-[15rem] titilliumRegular text-sm">Telefone: (+351) 912 345 678</p>
                        </div>

                        <div className="flex titilliumSemiBold gap-2 text-start flex-col items-start self-stretch">
                            <h2 className="text-lg">Link</h2>
                            <ul className="titilliumRegular flex gap-4 text-base">
                                <div>
                                    <li className="hover:text-secondary transition-colors duration-200">
                                        <Link to='/' aria-label="Página inicial">Home</Link>
                                    </li>
                                    <li className="hover:text-secondary transition-colors duration-200">
                                        <Link to='/quem-somos' aria-label="Sobre nós">Quem Somos</Link>
                                    </li>
                                    <li className="hover:text-secondary transition-colors duration-200">
                                        <Link to='/obras' aria-label="Obras em destaque">Obras em Destaque</Link>
                                    </li>
                                    <li className="hover:text-secondary transition-colors duration-200">
                                        <Link to='/obras' aria-label="Nossos serviços">Nossos Serviços</Link>
                                    </li>

                                </div>
                            </ul>
                        </div>

                        <div
                            id="backToTop"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`flex ${location.pathname === '/obrigado-pelo-contacto' ? 'hidden' : ''} gap-1 titilliumSemiBold flex-col justify-center items-center cursor-pointer`}
                        >
                            <button
                                className="bg-secondary cursor-pointer p-3 rounded-full shadow-lg hover:bg-amber-700 transition"
                                aria-label="Voltar ao topo"
                            >
                                <CaretUp />
                            </button>

                            <span className={`text-sm`}>Back to Top</span>
                        </div>
                    </div>
                </div>


                <div className="below-line-footer titilliumRegular pt-2 flex items-center justify-between px-80 h-10 w-[80%]">
                    <p className="text-sm text-zinc-400 ">&copy; {new Date().getFullYear()} Esdras Santos. All Rights Reserved.</p>

                    <div className="text-sm space-x-4">
                        <Link className="hover:text-secondary text-zinc-400 transition-colors duration-200" to='/privacy-policy' aria-label="Política de Privacidade">Política de Privacidade</Link>
                        <Link className="hover:text-secondary text-zinc-400 transition-colors duration-200" to='/legal-notice' aria-label="Aviso Legal">Aviso Legal</Link>

                    </div>
                </div>

            </div>

        </footer>
    )
}


export default Footer