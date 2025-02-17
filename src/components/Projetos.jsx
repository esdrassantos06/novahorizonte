import { useState } from "react";
import { ArrowCircleRight } from "@phosphor-icons/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Projetos = () => {
  const [mostrarProj, setMostrarProj] = useState(false);

  class Projeto {
    constructor(nome, tipo, background, cliente, data, duracao, preco) {
      this.nome = nome;
      this.tipo = tipo;
      this.background = background;
      this.cliente = cliente;
      this.data = data;
      this.duracao = duracao;
      this.preco = preco + " €";
    }
  } // Classe para criar objetos de projetos e deixar código mais fácil de fazer manutenção

  const projetos = [
    new Projeto(
      "Casa de 2 Andares",
      "Lorem Ipsum",
      "backgroundDestaque1",
      "Stellar Ltda",
      "15 Out 2020",
      "8M",
      "234 567",
    ),
    new Projeto(
      "Prédio Branco",
      "Lorem Ipsum",
      "backgroundDestaque2",
      "Construtora Apex S.A.",
      "23 Mar 2021",
      "1A, 2M",
      "345 678",
    ),
    new Projeto(
      "Prédio Amarelo",
      "Lorem Ipsum",
      "backgroundDestaque4",
      "Incorporadora Summit",
      "07 Jan 2022",
      "1A",
      "456 789",
    ),
    new Projeto(
      "Casa em Grécia",
      "Lorem Ipsum",
      "backgroundDestaque3",
      "Global Ventures Corp",
      "30 Jun 2021",
      "6M",
      "567 890",
    ),
    new Projeto(
      "Casa de 2 Andares",
      "Lorem Ipsum",
      "backgroundDestaque1",
      "PI Group",
      "12 Ago 2022",
      "9M",
      "678 901",
    ),
    new Projeto(
      "Prédio Branco",
      "Lorem Ipsum",
      "backgroundDestaque2",
      "Elite Properties Inc",
      "19 Nov 2021",
      "1A, 3M",
      "789 012",
    ),
    new Projeto(
      "Prédio Amarelo",
      "Lorem Ipsum",
      "backgroundDestaque4",
      "Nexus Development",
      "03 Mai 2022",
      "11M",
      "890 123",
    ),
    new Projeto(
      "Casa em Grécia",
      "Lorem Ipsum",
      "backgroundDestaque3",
      "Horizon Builders Group",
      "28 Fev 2021",
      "7M",
      "901 234",
    ),
  ];

  const projetosVisiveis = mostrarProj ? projetos : projetos.slice(0, 3); // mostra 3 projetos por padrão e o resto é mostrado ao clicar no botão

  return (
    <>
      <div className="projects grid grid-cols-1 place-items-center gap-10 px-10 lg:grid-cols-2 xl:grid-cols-3">
        {projetosVisiveis.map((projeto, index) => (
          <Dialog
            className="image-wrapper"
            key={index}
          >

            <DialogTrigger
              className={`text-primary cursor-pointer group relative rounded-lg ${projeto.background} flex h-80 w-60 flex-col items-start justify-end gap-2 pb-14 sm:h-120 sm:w-80 md:h-170 md:w-100`}
            >
              <div className="absolute inset-0 rounded-lg bg-black/50"></div>

              <div className="hover-in-project select-none pointer-events-none flex flex-col items-center justify-center absolute bottom-0 rounded-md duration-300 transition-all md:group-hover:opacity-100 bg-white z-10 w-[90%] h-[50%] opacity-0">

                <div className="flex w-full flex-col items-start justify-center pt-5 px-4">
                  <h2 className="circularBold text-xl">{projeto.nome}</h2>
                  <h3 className="text-primary/70 circularBook text-sm">
                    {projeto.tipo}
                  </h3>
                </div>

                <div className="flex flex-col items-center w-full h-full justify-center gap-4 p-4">
                  <div className="flex gap-2 px-2">
                    <div className="flex w-40 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">Preço:</h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.preco}
                      </h3>
                    </div>

                    <div className="flex w-40 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">Cliente:</h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.cliente}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-2 px-2">
                    <div className="flex w-40 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">
                        Ano do projeto:
                      </h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.data}
                      </h3>
                    </div>

                    <div className="flex w-40 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">Duração:</h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.duracao}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="bg-white rounded-md max-md:w-fit">
              <DialogHeader>
                <DialogTitle className="flex flex-col items-start justify-center px-4">
                  <h2 className="circularBold text-xl">{projeto.nome}</h2>
                  <h3 className="text-primary/70 circularBook text-sm">
                    {projeto.tipo}
                  </h3>
                </DialogTitle>
              </DialogHeader>

              <DialogDescription>
                <div className="flex flex-col items-center justify-center gap-4 p-1 sm:p-2">
                  <div className="flex gap-2">
                    <div className="flex sm:w-40 w-30 flex-col gap-0.5 rounded-md bg-zinc-500/20 justify-center p-4 text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">Preço:</h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.preco}
                      </h3>
                    </div>

                    <div className="flex sm:w-40 w-30 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 justify-center text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">Cliente:</h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.cliente}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex sm:w-40 w-30 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 justify-center text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">
                        Ano do projeto:
                      </h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.data}
                      </h3>
                    </div>

                    <div className="flex sm:w-40 w-30 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 justify-center text-center shadow-lg">
                      <h3 className="titilliumRegular text-sm">Duração:</h3>
                      <h3 className="titilliumBold text-base">
                        {projeto.duracao}
                      </h3>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}
      </div>



      <div className="text-primary flex w-full items-center justify-center py-2 select-none">
        <button
          onClick={() => setMostrarProj(!mostrarProj)}
          className="circularBold flex cursor-pointer items-center gap-2 underline-offset-2 hover:underline"
          aria-label={
            mostrarProj
              ? "Mostrar menos projetos"
              : "Explorar todos os projetos"
          }
        >
          {mostrarProj ? "Mostrar menos projetos" : "Explore todos os projetos"}{" "}
          {/* Quando clicar no botão, o texto vai mudar */}
          <ArrowCircleRight weight="fill" size={26} />
        </button>
      </div>
    </>
  );
};

export default Projetos;





