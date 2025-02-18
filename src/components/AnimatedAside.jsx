import { useState, useEffect } from "react";

const AnimatedAside = () => {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const animateNumber = (targetValue, setterFunction) => {

    let currentValue = 0;

    const interval = setInterval( () => {
      currentValue += Math.ceil(targetValue / 30); // Atualiza o valor atual a cada iteração e para depois de 30 iterações, deixando a animção mais suave

      if (currentValue >= targetValue) {
        currentValue = targetValue; 

        clearInterval(interval); // Quando atingir o valor final, para a animação
      }

      setterFunction(currentValue); // Atualiza a função do useState com o novo valor
    }, 50); // Segundo argumento de setInterval, intervalo de 50ms para atualizar o número
  };

  useEffect(() => {
    // Inicia a animação assim que o componente é carregado
    animateNumber(25, setNumber1);
    animateNumber(200, setNumber2);
    animateNumber(20, setNumber3);
  }, []);

  return (
    <aside
      id="animated-aside"
      className="mt-4 grid w-full grid-cols-2 items-center gap-5 select-none max-sm:w-screen md:grid-cols-3 md:mb-10 md:gap-20 lg:gap-40"
    >
      <div className="flex w-full items-center justify-center gap-2">
        <span className="titilliumBold text-secondary text-4xl xss:text-5xl md:text-6xl">
          {number1}+
        </span>
        <span className="text-text titilliumRegular text-sm">
          Anos de <br />
          experiência
        </span>
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <span className="titilliumBold text-secondary text-4xl xss:text-5xl md:text-6xl">
          {number2}+
        </span>
        <span className="text-text titilliumRegular text-sm">
          Projetos <br />
          Completos
        </span>
      </div>

      <div className="col-span-2 flex items-center justify-center gap-2 max-md:w-full md:col-span-1 md:text-center">
        <span className="titilliumBold text-secondary text-4xl xss:text-5xl md:text-6xl">
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
