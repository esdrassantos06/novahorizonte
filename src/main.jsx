import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import Cookies from './routes/legal/Cookies.jsx'
import Warning from './routes/legal/legalWarning.jsx'
import Policies from './routes/legal/Policies.jsx'
import ErrorPage from './routes/errorPage.jsx'
import Servicos from './routes/Serviços.jsx'
import Obras from './routes/Obras.jsx'
import QuemSomos from './routes/QuemSomos.jsx'
import Thanks from './routes/Thanks.jsx'


// Usando o react router para criar rotas para as páginas que estarão no website

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, //Página de erro 404, caso entre em alguma página que não tenha url
    children: [

      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cookies",
        element: <Cookies />
      },
      {
        path: "/legal-notice",
        element: <Warning />
      },
      {
        path: "/privacy-policy",
        element: <Policies />
      },
      {
        path: "/quem-somos",
        element: <QuemSomos />
      },
      {
        path: "/servicos",
        element: <Servicos />
      },
      {
        path: "/obras",
        element: <Obras />
      },
      {
        path: "/obrigado-pelo-contacto",
        element: <Thanks />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
