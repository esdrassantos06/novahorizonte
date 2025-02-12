import { useState } from "react";
import { ArrowCircleRight } from "@phosphor-icons/react";

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
                <h3 className="text-sm text-primary/70 z-10 circularBook">
                  {projeto.tipo}
                </h3>
              </div>

              <div className="flex items-center justify-center p-4 flex-col gap-4 w-full">
                <div className="flex gap-2 px-2">
                  <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                    <h3 className="text-sm titilliumRegular">Preço:</h3>
                    <h3 className="text-base titilliumBold">{projeto.preco}</h3>
                  </div>

                  <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                    <h3 className="text-sm titilliumRegular">Cliente:</h3>
                    <h3 className="text-base titilliumBold">
                      {projeto.cliente}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-2 px-2">
                  <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                    <h3 className="text-sm titilliumRegular">
                      Ano do projeto:
                    </h3>
                    <h3 className="text-base titilliumBold">{projeto.data}</h3>
                  </div>

                  <div className="bg-zinc-500/20 p-4 flex flex-col gap-0.5 rounded-md shadow-lg w-40 text-center">
                    <h3 className="text-sm titilliumRegular">Duração:</h3>
                    <h3 className="text-base titilliumBold">
                      {projeto.duracao}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex text-primary mt-4 pr-40 w-full items-center justify-end">
        <button
          onClick={() => setMostrarProj(!mostrarProj)}
          className="gap-2 cursor-pointer hover:underline underline-offset-2 circularBold flex items-center"
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
