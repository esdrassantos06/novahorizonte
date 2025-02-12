import { useState, useEffect } from "react";

const AnimatedAside = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const animateNumber = (targetValue, setterFunction) => {
    let currentValue = 0;

    const interval = setInterval(() => {
      currentValue += Math.ceil(targetValue / 30); // Dividindo por 30, a animação fica mais suave

      if (currentValue >= targetValue) {
        currentValue = targetValue; // Quando atingir o valor final, para
        clearInterval(interval); // Para a animação
      }

      setterFunction(currentValue); // Atualiza o estado com o novo valor
    }, 50); // Intervalo de 50ms para atualizar o número
  };

  useEffect(() => {
    // Inicia a animação assim que o componente iniciado
    animateNumber(25, setNumber1);
    animateNumber(200, setNumber2);
    animateNumber(20, setNumber3);
  }, []);

  return (
    <aside
      id="animated-aside"
      className="mt-10 grid w-full grid-cols-2 items-center gap-10 select-none max-sm:w-screen sm:mb-40 md:grid-cols-3 md:gap-20 lg:gap-40"
    >
      <div className="flex w-full items-center justify-center gap-2">
        <span className="titilliumBold text-secondary text-4xl md:text-6xl">
          {number1}+
        </span>
        <span className="text-text titilliumRegular text-sm">
          Anos de <br />
          experiência
        </span>
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <span className="titilliumBold text-secondary text-4xl md:text-6xl">
          {number2}+
        </span>
        <span className="text-text titilliumRegular text-sm">
          Projetos <br />
          Completos
        </span>
      </div>

      <div className="col-span-2 flex items-center justify-center gap-2 max-md:w-full md:col-span-1 md:text-center">
        <span className="titilliumBold text-secondary text-4xl md:text-6xl">
          {number3}+
        </span>
        <span className="text-text titilliumRegular text-sm">
          Prémios <br />
          Globais
        </span>
      </div>
    </aside>
  );
};

export default AnimatedAside;
