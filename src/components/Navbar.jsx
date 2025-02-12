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
    <header className="bg-primary flex fixed top-0 w-full h-20 z-50">
      <nav className="flex w-full items-center justify-between">
        <Link
          to="/"
          title="Construtora Nova Horizonte"
          className="select-none -space-y-3 ml-10 z-99 mb-1 flex flex-col items-center"
          aria-label="Ir para a página inicial"
        >
          <img
            src={image}
            className={`md:w-14 select-none md:h-14  ${menuOpen ? 'w-14 h-14' : 'w-18 h-18'} object-contain`}
            alt="Logo"
          />
          <div className={`md:flex ${menuOpen ? 'flex' : 'hidden'}  select-none flex-col items-center -space-y-1`}>
            <p className="montserrat select-none text-xs">Construtora</p>
            <p className="montserrat select-none text-nowrap text-sm font-bold">
              Nova <span className="text-secondary">Horizonte</span>
            </p>
          </div>
        </Link>

        <div
          className={`absolute left-0 top-20 flex text-nowrap justify-start max-md:pl-10 text-start items-start max-md:w-[70%] min-h-screen md:min-h-0 md:top-1/2 md:-translate-y-1/2 bg-primary md:left-1/2 z-10 md:-translate-x-1/2 transition-all duration-300 ${menuOpen ? "block" : "hidden md:flex"}`}
        >
          <ul className="flex max-md:w-[90%] z-19 md:flex-row max-md:gap-10 flex-col max-md:mt-5 titilliumSemiBold gap-5">
            {links.map((link, index) => (
              <li
                key={index}
                className={`${location.pathname === link.path ? "text-secondary md:underline" : "text-text md:hover:underline"} max-md:hover:text-secondary underline-offset-5 decoration-2 decoration-secondary max-md:pb-4 max-md:border-b-[1px] border-secondary transition-all duration-300`}
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
            className="text-text md:hidden flex w-full h-10 items-center justify-center z-99 titilliumBold mr-10 cursor-pointer  rounded-lg transition-colors duration-300 hover:bg-amber-700 bg-secondary"
            to="/contact"
            aria-label="Ir para a página de contato"
          >
            Contacte-nos
          </Link>
          </ul>

        </div>

        
        <div className="z-50 flex items-center">
          <Link
            className="text-text md:flex hidden z-99 titilliumBold mr-10 cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-amber-700 bg-secondary"
            to="/contact"
            aria-label="Ir para a página de contato"
          >
            Contacte-nos
          </Link>
          <button
            onClick={toggleMenu}
            className="text-text mr-10 md:hidden cursor-pointer"
          >
            {menuOpen ? <X size={40} /> : <List size={40} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
