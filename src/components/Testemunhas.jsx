import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import people1 from "../assets/images/testemonials/people1.webp";
import people2 from "../assets/images/testemonials/people2.webp";
import people3 from "../assets/images/testemonials/people3.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Autoplay,
} from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

class Testemunha {
  constructor(text, author, role, photo) {
    this.text = text;
    this.author = author;
    this.role = role;
    this.photo = photo;
  }
}

const testemunhas = [
  new Testemunha(
    "Estou muito satisfeito com os serviços. A equipa é muito profissional e eficiente, completando o nosso projeto a tempo e a um custo muito acessível.",
    "Tom Delange",
    "CEO, Lexmark",
    people1,
  ),
  new Testemunha(
    "Serviço excelente e qualidade excecional. Entregaram além das nossas expectativas e foram muito fáceis de trabalhar.",
    "Jane Smith",
    "CTO, TechCorp",
    people2,
  ),
  new Testemunha(
    "Um parceiro confiável para todas as nossas necessidades de construção. A atenção ao detalhe e o compromisso com os prazos são de louvar.",
    "John Doe",
    "Gestor de Projeto, BuildIt",
    people3,
  ),
];

const Testemunhas = () => {
  return (
    <div className="titilliumRegular relative mx-auto md:w-150 max-w-screen sm:w-100 rounded-lg bg-zinc-800 px-14 pb-4 shadow-2xl">
      <button
        className="prev-button bg-secondary absolute bottom-1/2 left-2 z-50 flex h-10 w-10 translate-y-1/2 cursor-pointer items-center justify-center rounded-full p-2 text-gray-700 transition duration-200 hover:bg-amber-600 hover:text-gray-900"
        aria-label="Ir para o testemunho anterior"
      >
        <CaretLeft color="#F5F5F5" size={20} />
      </button>

      <button
        className="next-button bg-secondary absolute right-2 bottom-1/2 z-50 flex h-10 w-10 translate-y-1/2 cursor-pointer items-center justify-center rounded-full p-2 text-gray-700 transition duration-200 hover:bg-amber-600 hover:text-gray-900"
        aria-label="Ir para o próximo testemunho"
      >
        <CaretRight color="#F5F5F5" size={20} />
      </button>

      {/* Swiper */}
      <Swiper
        className="h-full"
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
            <div className="flex min-h-90 flex-col justify-center px-10 max-md:pb-12">
            <div className="h-1/2">
              <p className="text-text text-base text-center">
                &quot;{membro.text}&quot;
              </p>
              </div>
              <div className="flex flex-col h-1/2 items-center justify-center gap-1 pt-4">
                <h3 className="text-text text-center text-lg font-bold">{membro.author}</h3>
                <p className="text-text text-center mb-2 text-sm">{membro.role}</p>
                <img
                  src={membro.photo}
                  alt={membro.author}
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testemunhas;
