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
      className="w-1/2 mt-10 xl:mt-10 select-none p-10 flex sm:gap-10 md:gap-20 lg:gap-40"
    >
      <div className="flex gap-2 items-center">
        <span className="text-6xl titilliumBold text-secondary">
          {number1}+
        </span>
        <span className="text-text text-sm titilliumRegular">
          Anos de <br />
          experiência
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-6xl titilliumBold text-secondary">
          {number2}+
        </span>
        <span className="text-text text-sm titilliumRegular">
          Projetos <br />
          Completos
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-6xl titilliumBold text-secondary">
          {number3}+
        </span>
        <span className="text-text text-sm titilliumRegular">
          Prémios <br />
          Globais
        </span>
      </div>
    </aside>
  );
};

export default AnimatedAside;
