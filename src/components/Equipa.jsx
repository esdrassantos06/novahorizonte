import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import fotohomem1 from '../assets/images/equipa/homem1.jpg'
import fotohomem2 from '../assets/images/equipa/homem2.webp'
import fotohomem3 from '../assets/images/equipa/homem3.webp'
import fotohomem4 from '../assets/images/equipa/homem4.webp'

import { Navigation, Pagination, Scrollbar, Keyboard, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Equipa = () => {

    const equipa = [
        {
            nome: 'João Silva',
            cargo: 'Trabalhador',
            foto: fotohomem1,
        },
        {
            nome: 'José Santos',
            cargo: 'Engenheiro Civil',
            foto: fotohomem2,
        },
        {
            nome: 'Pedro Almeida',
            cargo: 'Designer de Interiores',
            foto: fotohomem3,
        },
        {
            nome: 'Mohammed Ali',
            cargo: 'Gerente de Marketing',
            foto: fotohomem4,
        },
    ]


    return (
        <div className="h-full rounded-lg w-full flex items-center p-20 justify-center relative">


            {/* Custom Buttons (Fora do Swiper) */}
            <div className="prev-button absolute left-[30px] top-[40%] -translate-y-1/2 z-50">
                <div className="bg-primary outline-text/20 outline hover:bg-zinc-800 cursor-pointer p-2 rounded-lg">
                    <ArrowLeft size={25} color="#fff" />
                </div>
            </div>

            <div className="next-button absolute right-[30px] top-[40%] -translate-y-1/2 z-50">
                <div className="bg-primary outline-text/20 outline hover:bg-zinc-800 cursor-pointer p-2 rounded-lg">
                    <ArrowRight size={25} color="#fff" />
                </div>
            </div>


            {/* Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Keyboard, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                    },
                    1025: {
                        slidesPerView: 3,
                    },
                }}
                navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button",
                }}
                scrollbar={true}
                loop={true}
            >
                {equipa.map((membro, index) => (
                    <SwiperSlide key={index}>
                        <div className="membro mb-20 flex text-text flex-col items-center gap-2">
                            <img
                                src={membro.foto}
                                className="w-82.5 h-94 select-none rounded-lg object-cover"
                                alt={membro.nome}
                            />
                            <div className="flex flex-col">
                                <h3 className="text-lg circularBold">{membro.nome}</h3>
                                <p className="text-base titilliumRegular">{membro.cargo}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    )
}

export default Equipa
