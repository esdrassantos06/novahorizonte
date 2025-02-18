import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Quando troca de páginas, ele vai direto pro topo da página automaticamente
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
