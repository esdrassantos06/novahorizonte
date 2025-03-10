import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

// Irei utilizar a Lib js-cookie

const CookiesBanner = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookiesAccepted")) {
      setIsVisible(true); /* Se o valor 'cookiesAccepted' não existir, vai aparecer o banner */ 
    }
  }, []);

  const expireDays = 30; //aplicando clean code no código

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: expireDays });
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="titilliumRegular text-text fixed right-0 bottom-0 left-0 z-99 flex items-center justify-between bg-neutral-800 p-4">
        <p>
          Usamos cookies para melhorar sua experiência. Ao continuar, você
          concorda com nossa
          <Link
            to="/cookies"
            target="_blank"
            className="text-secondary hover:underline"
          >
            {" "}
            Política de Cookies
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondary text-text hover:bg-secondary/80 cursor-pointer rounded px-4 py-2"
          aria-label="Aceitar ação"
        >
          Aceitar
        </button>
      </div>
    )
  );
};

export default CookiesBanner;
