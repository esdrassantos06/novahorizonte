import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
/* Link para facilitar o redirecionamento */
import { useState } from "react";
/* 

useLocation está sendo usado para localizar onde o url da página está e modificar a cor do link para text-secondary e tirar o hover do underline

Ex: Quando você sai da página home e vai para "quem somos", a cor do quem somos muda para laranja e o underline aparece sem precisar fazer hover

*/
import image from "../assets/favicon/Favicon.webp";

// Para a navbar, irei utilizar a fonte titillium

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let links = [
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

  const location = useLocation();

  return (
    <header className="bg-primary fixed top-0 z-50 flex h-20 w-full">
      <nav className="flex w-full items-center justify-between">
        <Link
          to="/"
          title="Construtora Nova Horizonte"
          className="z-99 mb-1 ml-10 flex flex-col items-center -space-y-3 select-none"
          aria-label="Ir para a página inicial"
        >
          <img
            src={image}
            className={`transition-all duration-300 select-none md:h-14 md:w-14 ${menuOpen ? "h-14 w-14" : "h-18 w-18"} object-contain`}
            alt="Logo"
          />
          <div
            className={`md:flex ${menuOpen ? "flex" : "hidden"} flex-col items-center -space-y-1 select-none`}
          >
            <p className="montserrat text-xs select-none">Construtora</p>
            <p className="montserrat text-sm font-bold text-nowrap select-none">
              Nova <span className="text-secondary">Horizonte</span>
            </p>
          </div>
        </Link>

        <div
          className={`bg-primary absolute top-20 left-0 z-10 flex min-h-screen items-start justify-start text-start text-nowrap transition-all duration-300 max-md:w-[70%] max-md:pl-10 md:top-1/2 md:left-1/2 md:min-h-0 md:-translate-x-1/2 md:-translate-y-1/2 ${menuOpen ? "scale-y-100 opacity-100" : "max-md:scale-y-0 max-md:opacity-0 md:flex"}`}
        >
          <ul className="titilliumSemiBold z-19 flex flex-col gap-5 max-md:mt-5 max-md:w-[90%] max-md:gap-10 md:flex-row">
            {links.map((link, index) => (
              <li
                key={index}
                className={`${location.pathname === link.path ? "text-secondary md:underline" : "text-text md:hover:underline"} max-md:hover:text-secondary decoration-secondary border-secondary decoration-2 underline-offset-5 transition-all duration-300 max-md:border-b-[1px] max-md:pb-4`}
              >
                <Link
                  to={link.path}
                  aria-label={`Ir para a página ${link.name}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link
              className="text-text titilliumBold bg-secondary z-99 mr-10 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-amber-700 md:hidden"
              to="/contact"
              aria-label="Ir para a página de contato"
            >
              Contacte-nos
            </Link>
          </ul>
        </div>

        <div className="z-50 flex items-center">
          <Link
            className="text-text titilliumBold bg-secondary z-99 mr-10 hidden cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-amber-700 md:flex"
            to="/contact"
            aria-label="Ir para a página de contato"
          >
            Contacte-nos
          </Link>
          <button
            onClick={toggleMenu}
            className="text-text mr-10 cursor-pointer md:hidden"
          >
            {menuOpen ? <X size={40} /> : <List size={40} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
