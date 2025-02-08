import { useState } from "react"
import { ArrowCircleRight } from "@phosphor-icons/react";


const Projetos = () => {

    const [mostrarProj, setMostrarProj] = useState(false);


    const projetos = [
        {
            nome: "Casa de 2 Andares",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque1",
            cliente: "Stellar Ltda",
            data: "15 Out 2020",
            duracao: "8M",
            preco: (Math.floor(Math.random() * (450000 - 250000) + 250000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Prédio Branco",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque2",
            cliente: "Construtora Apex S.A.",
            data: "23 Mar 2021",
            duracao: "1A, 2M",
            preco: (Math.floor(Math.random() * (900000 - 600000) + 600000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Prédio Amarelo",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque4",
            cliente: "Incorporadora Summit",
            data: "07 Jan 2022",
            duracao: "1A",
            preco: (Math.floor(Math.random() * (800000 - 500000) + 500000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Casa em Grécia",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque3",
            cliente: "Global Ventures Corp",
            data: "30 Jun 2021",
            duracao: "6M",
            preco: (Math.floor(Math.random() * (350000 - 200000) + 200000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Casa de 2 Andares",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque1",
            cliente: "PI Group",
            data: "12 Ago 2022",
            duracao: "9M",
            preco: (Math.floor(Math.random() * (450000 - 250000) + 250000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Prédio Branco",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque2",
            cliente: "Elite Properties Inc",
            data: "19 Nov 2021",
            duracao: "1A, 3M",
            preco: (Math.floor(Math.random() * (900000 - 600000) + 600000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Prédio Amarelo",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque4",
            cliente: "Nexus Development",
            data: "03 Mai 2022",
            duracao: "11M",
            preco: (Math.floor(Math.random() * (800000 - 50000) + 500000)).toLocaleString('pt-PT') + " €"
        },
        {
            nome: "Casa em Grécia",
            tipo: "Lorem Ipsum",
            background: "backgroundDestaque3",
            cliente: "Horizon Builders Group",
            data: "28 Fev 2021",
            duracao: "7M",
            preco: (Math.floor(Math.random() * (350000 - 200000) + 20000)).toLocaleString('pt-PT') + " €"
        },
    ];




    const projetosVisiveis = mostrarProj ? projetos : projetos.slice(0, 3);


    return (
        <>
            <div className="grid ml-40 grid-cols-1 w-full lg:grid-cols-3 gap-5">
                {projetosVisiveis.map((projeto, index) => (
                    <div
                        key={index}
                        className={`relative group text-primary ${projeto.background} rounded-lg flex flex-col items-start justify-end gap-2 pb-14 h-[40em] w-[25em]`}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>


                        <div className="flex flex-col items-center -mb-14 justify-center w-[90%] bg-white z-20 h-80 rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">

                            <div className="w-full flex px-4 mb-4 flex-col items-start justify-center">
                                <h2 className="text-xl z-10 circularBold">{projeto.nome}</h2>
                                <h3 className="text-sm text-primary/70 z-10 circularBook">{projeto.tipo}</h3>
                            </div>


                            <div className="flex items-center justify-center p-4 flex-col gap-4 w-full">

                                <div className="flex gap-2 px-2">
                                    <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                                        <h3 className="text-sm titilliumRegular">Preço:</h3>
                                        <h3 className="text-base titilliumBold">{projeto.preco}</h3>
                                    </div>

                                    <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                                        <h3 className="text-sm titilliumRegular">Cliente:</h3>
                                        <h3 className="text-base titilliumBold">{projeto.cliente}</h3>
                                    </div>
                                </div>

                                <div className="flex gap-2 px-2">
                                    <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                                        <h3 className="text-sm titilliumRegular">Ano do projeto:</h3>
                                        <h3 className="text-base titilliumBold">{projeto.data}</h3>
                                    </div>

                                    <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                                        <h3 className="text-sm titilliumRegular">Duração:</h3>
                                        <h3 className="text-base titilliumBold">{projeto.duracao}</h3>
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>
                ))}
            </div>



            <div className="flex text-primary mt-4 pr-40 w-full items-center justify-end">
                <button onClick={() => setMostrarProj(!mostrarProj)} className="gap-2 cursor-pointer hover:underline underline-offset-2 circularBold flex items-center">

                    {mostrarProj ? "Mostrar menos projetos" : "Explore todos os projetos"} {/* Quando clicar no botão, o texto vai mudar */}

                    <ArrowCircleRight weight="fill" size={26} /></button>
            </div>
        </>
    )
}

export default Projetos