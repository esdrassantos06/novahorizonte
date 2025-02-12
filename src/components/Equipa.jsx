import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import fotohomem1 from "../assets/images/equipa/homem1.webp";
import fotohomem2 from "../assets/images/equipa/homem2.webp";
import fotohomem3 from "../assets/images/equipa/homem3.webp";
import fotohomem4 from "../assets/images/equipa/homem4.webp";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Equipa = () => {

  
  class Equipa {
    constructor(nome, cargo, foto) {
      this.nome = nome;
      this.cargo = cargo;
      this.foto = foto;
    }
  }

  const equipa = [
    new Equipa("João Silva", "Trabalhador", fotohomem1),
    new Equipa("José Santos", "Engenheiro Civil", fotohomem2),
    new Equipa("Pedro Almeida", "Designer de Interiores", fotohomem3),
    new Equipa("Mohammed Ali", "Gerente de Marketing", fotohomem4),
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-lg p-20">
      {/* Custom Buttons (Fora do Swiper) */}
      <button
        className="prev-button absolute top-[40%] left-[30px] z-20 -translate-y-1/2"
        aria-label="Ir para a imagem anterior"
      >
        <div className="bg-primary outline-text/20 cursor-pointer rounded-lg p-2 outline hover:bg-zinc-800">
          <ArrowLeft size={25} color="#fff" />
        </div>
      </button>

      <button
        className="next-button absolute top-[40%] right-[30px] z-20 -translate-y-1/2"
        aria-label="Ir para a próxima imagem"
      >
        <div className="bg-primary outline-text/20 cursor-pointer rounded-lg p-2 outline hover:bg-zinc-800">
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
            <div className="membro text-text mb-20 flex flex-col items-center gap-2">
              <img
                src={membro.foto}
                className="h-94 w-82.5 rounded-lg object-cover select-none"
                alt={membro.nome}
                loading="lazy"
              />
              <div className="flex flex-col">
                <h3 className="circularBold text-lg">{membro.nome}</h3>
                <p className="titilliumRegular text-base">{membro.cargo}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Equipa;
