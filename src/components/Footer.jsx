import { CaretUp } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Quem Somos",
      path: "/quem-somos",
    },
    {
      name: "Obras em Destaque",
      path: "/obras",
    },
    {
      name: "Nossos Serviços",
      path: "/servicos",
    },
  ];

  return (
    <footer className="bg-terceary text-text relative z-999 px-10 pt-12 pb-6 tracking-wide">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <Link
            to="/"
            aria-label="Logo da Empresa"
            className="logo-footer flex cursor-pointer flex-col -space-y-1 self-start text-start select-none"
          >
            <p className="montserrat text-base">Construtora</p>
            <p className="montserrat text-lg font-bold text-nowrap">
              Nova <span className="text-secondary">Horizonte</span>
            </p>
          </Link>

          <div className="mt-6">
            <p className="text-text titilliumRegular text-sm leading-relaxed">
              A Construtora Nova Horizonte é especialista em construção civil,
              oferecendo soluções completas e personalizadas para projetos
              residenciais, comerciais e industriais.
            </p>
          </div>

          <ul className="mt-10 flex space-x-5">
            <li>
              <a
                href="https://linkedin.com"
                className="group flex items-center justify-center rounded-full"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white/70"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com"
                className="group flex items-center justify-center rounded-full"
                target="_blank"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white/70"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://X.com"
                className="group flex items-center justify-center rounded-full"
                target="_blank"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white/70"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                className="group flex items-center justify-center rounded-full"
                target="_blank"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="group-hover:text-white/70"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z" />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="titilliumSemiBold relative text-lg max-sm:cursor-pointer">
            Escritório
          </h4>

          <ul className="mt-6 space-y-4">
            <li>
              <p className="titilliumRegular text-sm">
                Avenida dos Construtores, <br /> 456, Porto, Portugal
              </p>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="titilliumSemiBold relative text-lg max-sm:cursor-pointer">
            Contacto
          </h4>
          <ul className="titilliumRegular mt-6 space-y-2">
            <li>
              <span className="text-sm">novahorizonteempresa@gmail.com</span>
            </li>
            <li>
              <span className="text-sm">Telefone: (+351) 912 345 678</span>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="titilliumSemiBold relative text-lg max-sm:cursor-pointer">
            Link
          </h4>

          <ul className="titilliumRegular mt-6 space-y-3">
            {links.map((link, index) => (
              <li
                key={index}
                className="hover:text-secondary text-sm transition-colors duration-200"
              >
                <Link to={link.path} aria-label={link.name}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="backToTop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`flex flex-col ${location.pathname === "/obrigado-pelo-contacto" ? "hidden" : ""} titilliumSemiBold cursor-pointer items-center justify-center gap-1`}
        >
          <button
            className="bg-secondary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-lg transition hover:bg-amber-700"
            aria-label="Voltar ao topo"
          >
            <CaretUp size={20} />
          </button>

          <span className={`text-sm text-nowrap`}>Back to Top</span>
        </div>
      </div>

      <hr className="mt-10 mb-6 border-gray-600/70" />

      <div className="titilliumRegular flex flex-wrap gap-4 max-md:flex-col">
        <ul className="text-zinc-400 max-md:space-y-2 md:flex md:space-x-6">
          <li>
            <Link
              className="hover:text-secondary text-sm text-zinc-400 transition-colors duration-200"
              to="/legal-notice"
              aria-label="Aviso Legal"
            >
              Aviso Legal
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-secondary text-sm text-zinc-400 transition-colors duration-200"
              to="/privacy-policy"
              aria-label="Política de Privacidade"
            >
              Política de Privacidade
            </Link>
          </li>
        </ul>

        <p className="text-sm text-zinc-400 md:ml-auto">
          &copy; {new Date().getFullYear()} Esdras Santos. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
