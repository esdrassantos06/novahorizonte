import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

// Irei utilizar a Lib js-cookie

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookiesAccepted")) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 30 }); // Expira em 30 dias
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed z-50 bottom-0 left-0 bg-neutral-800 right-0 text-white p-4 flex justify-between items-center">
      <p>
        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa 
        <Link to='/cookies' target="_blank" className="text-secondary hover:underline"> Política de Cookies</Link>.
      </p>
      <button 
        onClick={handleAccept} 
        className="bg-secondary cursor-pointer text-white px-4 py-2 rounded hover:bg-amber-600">
        Aceitar
      </button>
    </div>
    )
  );
};

export default CookiesBanner