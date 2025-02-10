import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import fotohomem1 from '../assets/images/equipa/homem1.webp'
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

    class Equipa {
        constructor(nome, cargo, foto) {
            this.nome = nome;
            this.cargo = cargo;
            this.foto = foto;
        }
    }

    const equipa = [
        new Equipa('João Silva', 'Trabalhador', fotohomem1),
        new Equipa('José Santos', 'Engenheiro Civil', fotohomem2),
        new Equipa('Pedro Almeida', 'Designer de Interiores', fotohomem3),
        new Equipa('Mohammed Ali', 'Gerente de Marketing', fotohomem4),
    ];
    

    return (
        <div className="h-full rounded-lg w-full flex items-center p-20 justify-center relative">


            {/* Custom Buttons (Fora do Swiper) */}
            <button
                className="prev-button absolute left-[30px] top-[40%] -translate-y-1/2 z-50"
                aria-label="Ir para a imagem anterior"
            >
                <div className="bg-primary outline-text/20 outline hover:bg-zinc-800 cursor-pointer p-2 rounded-lg">
                    <ArrowLeft size={25} color="#fff" />
                </div>
            </button>

            <button
                className="next-button absolute right-[30px] top-[40%] -translate-y-1/2 z-50"
                aria-label="Ir para a próxima imagem"
            >
                <div className="bg-primary outline-text/20 outline hover:bg-zinc-800 cursor-pointer p-2 rounded-lg">
                    <ArrowRight size={25} color="#fff" />
                </div>
            </button>



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
                                alt={membro.nome} loading='lazy'
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
