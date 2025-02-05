import { useState } from "react"
import { ArrowCircleRight } from "@phosphor-icons/react";


const Projetos = () => {

    const [mostrarProj, setMostrarProj] = useState(false);


    const projetos = [
        {
            nome: "Casa de 2 Andares",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque1",
        },
        {
            nome: "Prédio Branco",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque2",
        },
        {
            nome: "Prédio Amarelo",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque4",
        },
        {
            nome: "Casa em Grécia",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque3",
        },
        // Adicione outros projetos aqui...
    ];

    const projetosVisiveis = mostrarProj ? projetos : projetos.slice(0, 3);


    return (
        <div>
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 space-y-5">
                {projetosVisiveis.map((projeto, index) => (
                    <div
                        key={index}
                        className={`relative text-text ${projeto.background} rounded-lg flex flex-col items-center justify-end pb-14 h-[35em] w-[25em]`}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        <h2 className="text-xl z-10 circularBook">{projeto.nome}</h2>
                        <h3 className="text-base z-10 titilliumRegular">{projeto.tipo}</h3>
                    </div>
                ))}
            </div>


            <div className="flex text-primary mt-4 pr-40 w-full items-center justify-end">
                <button onClick={() => setMostrarProj(!mostrarProj)} className="gap-2 cursor-pointer hover:underline underline-offset-2 circularBold flex items-center">

                    {mostrarProj ? "Mostrar menos projetos" : "Explore todos os projetos"} {/* Quando clicar no botão, o texto vai mudar */}

                    <ArrowCircleRight weight="fill" size={26} /></button>
            </div>
        </div>
    )
}

export default Projetos