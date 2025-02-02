import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import people1 from '../assets/images/testemonials/people1.jpg'
import people2 from '../assets/images/testemonials/people2.jpg'
import people3 from '../assets/images/testemonials/people3.jpg'

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
        <div className="max-w-md mx-auto titilliumRegular shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <p className="text-white text-base">
                    &quot;{currentTestimonial.text}&quot;
                </p>
                <div className="mt-4 flex flex-col items-center justify-center">
                    <p className="text-white font-bold text-lg">{currentTestimonial.author}</p>
                    <p className="text-white mb-1 text-sm">{currentTestimonial.role}</p>
                    <img src={currentTestimonial.photo} alt="cliente" className="w-14 object-cover h-14 rounded-full" />
                </div>
            </div>
            <div className="flex justify-between px-6 py-4 bg-gray-100">
                <button
                    onClick={anterior}
                    className="text-gray-700 gap-2 flex items-center hover:text-gray-900"
                >
                    <ArrowLeft /> Anterior
                </button>
                <button
                    onClick={proximo}
                    className="text-gray-700 gap-2 flex items-center hover:text-gray-900"
                >
                    Próximo <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Testemunhas;