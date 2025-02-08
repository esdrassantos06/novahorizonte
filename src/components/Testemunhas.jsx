import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import people1 from '../assets/images/testemonials/people1.webp'
import people2 from '../assets/images/testemonials/people2.webp'
import people3 from '../assets/images/testemonials/people3.webp'

const testemunhas = [
    {
        id: 1,
        text: "Estou muito satisfeito com os serviços. A equipa é muito profissional e eficiente, completando o nosso projeto a tempo e a um custo muito acessível. A qualidade do trabalho é muito boa e recomendo vivamente esta empresa para qualquer projeto de construção.",
        author: "Tom Delange",
        role: "CEO, Lexmark",
        photo: people1,
    },
    {
        id: 2,
        text: "Serviço excelente e qualidade excecional. Entregaram além das nossas expectativas e foram muito fáceis de trabalhar.",
        author: "Jane Smith",
        role: "CTO, TechCorp",
        photo: people2,
    },
    {
        id: 3,
        text: "Um parceiro confiável para todas as nossas necessidades de construção. A atenção ao detalhe e o compromisso com os prazos são de louvar.",
        author: "John Doe",
        role: "Gestor de Projeto, BuildIt",
        photo: people3,
    }
];


const Testemunhas = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const anterior = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testemunhas.length - 1 : prevIndex - 1
        );
    };

    const proximo = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testemunhas.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testemunhas[currentIndex];

    return (
        <div className="max-w-md mx-auto  bg-zinc-800 titilliumRegular shadow-2xl rounded-lg overflow-hidden">
            <div className="p-6">
                <p className="text-text text-center">
                    &quot;{currentTestimonial.text}&quot;
                </p>
                <div className="mt-4 flex flex-col items-center justify-center">
                    <p className="text-text font-bold text-lg">{currentTestimonial.author}</p>
                    <p className="text-text mb-2 text-sm">{currentTestimonial.role}</p>
                </div>
            </div>

            <div className="buttons-testemonials flex w-full items-center justify-between px-20 pb-10">
                <button
                    onClick={anterior}
                    className="text-gray-700 cursor-pointer p-2 rounded-full bg-secondary hover:bg-amber-600 duration-200 transition flex items-center hover:text-gray-900"
                >
                    <CaretLeft  color="#F5F5F5 " />
                </button>
                <img src={currentTestimonial.photo} alt="cliente" className="w-14 object-cover h-14 rounded-full" />
                <button
                    onClick={proximo}
                    className="text-gray-700 cursor-pointer bg-secondary hover:bg-amber-600 duration-200 transition p-2 rounded-full flex items-center hover:text-gray-900"
                >
                    <CaretRight  color="#F5F5F5 " />
                </button>
            </div>
        </div>
    );
};

export default Testemunhas;