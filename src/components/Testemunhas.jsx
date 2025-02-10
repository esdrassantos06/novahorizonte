import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import people1 from '../assets/images/testemonials/people1.webp'
import people2 from '../assets/images/testemonials/people2.webp'
import people3 from '../assets/images/testemonials/people3.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Keyboard, Autoplay } from 'swiper/modules';


// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const testemunhas = [
    {
        id: 1,
        text: "Estou muito satisfeito com os serviços. A equipa é muito profissional e eficiente, completando o nosso projeto a tempo e a um custo muito acessível.",
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


    return (
        <div className="max-w-md mx-auto relative  bg-zinc-800 titilliumRegular shadow-2xl rounded-lg overflow-hidden">

            {/* Custom Buttons (Fora do Swiper) */}
            <button
                    className="prev-button absolute z-50  text-gray-700 left-2 bottom-1/2 translate-y-1/2 cursor-pointer p-2 rounded-full bg-secondary hover:bg-amber-600 duration-200 transition flex items-center hover:text-gray-900"
                    aria-label="Ir para o testemunho anterior"
                >
                    <CaretLeft color="#F5F5F5 " />
                </button>

                <button
                    className="next-button absolute z-50 text-gray-700 right-2 bottom-1/2 translate-y-1/2 cursor-pointer bg-secondary hover:bg-amber-600 duration-200 transition p-2 rounded-full flex items-center hover:text-gray-900"
                    aria-label="Ir para o próximo testemunho"
                >
                    <CaretRight color="#F5F5F5 " />
                </button>



            {/* Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Keyboard, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button",
                }}
                scrollbar={true}
                loop={true}
            >
                {testemunhas.map((membro, index) => (
                    <SwiperSlide key={index}>
                        <div className="px-10 min-h-90 justify-center  flex flex-col">
                            <p className="text-text text-center">
                                &quot;{membro.text}&quot;
                            </p>
                            <div className="flex flex-col pt-4 gap-1 items-center justify-center">
                                <p className="text-text font-bold text-lg">{membro.author}</p>
                                <p className="text-text mb-2 text-sm">{membro.role}</p>
                                <img src={membro.photo} alt={membro.author} className="w-14 object-cover h-14 rounded-full" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testemunhas;