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

  const projetosVisiveis = mostrarProj ? projetos : projetos.slice(0, 3); // mostra 3 projetos por padrão e o resto é mostrado ao clicar no botão

  return (
    <>
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-3">
        {projetosVisiveis.map((projeto, index) => (
          <div
            key={index}
            className={`group text-primary relative ${projeto.background} flex h-[40em] w-[25em] flex-col items-start justify-end gap-2 rounded-lg pb-14`}
          >
            <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>

            <div className="z-20 -mb-14 flex h-80 w-[90%] flex-col items-center justify-center rounded-lg bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="mb-4 flex w-full flex-col items-start justify-center px-4">
                <h2 className="circularBold z-10 text-xl">{projeto.nome}</h2>
                <h3 className="text-primary/70 circularBook z-10 text-sm">
                  {projeto.tipo}
                </h3>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
                <div className="flex gap-2 px-2">
                  <div className="flex w-40 flex-col gap-0.5 rounded-md bg-zinc-500/20 p-4 text-center shadow-lg">
                    <h3 className="titilliumRegular text-sm">Preço:</h3>
                    <h3 className="titilliumBold text-base">{projeto.preco}</h3>
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
                    <h3 className="titilliumBold text-base">{projeto.data}</h3>
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
          </div>
        ))}
      </div>

      <div className="text-primary mt-4 flex w-full items-center justify-end pr-40">
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
