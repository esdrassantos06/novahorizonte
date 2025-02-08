import '../App.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl circularBlack text-gray-800">404</h1>
      <h2 className="text-4xl circularMedium text-gray-600 mb-4">Página Não Encontrada</h2>
      <p className="text-gray-500 circularBook mb-8">A página que procura não existe ou foi movida.</p>

      <Link
        className="text-text flex items-center gap-2 text-lg circularMedium px-2 py-3 transition-all duration-150 transform hover:scale-105 bg-black hover:bg-primary rounded-lg"
        to='/'
        aria-label="Voltar ao início"
      >
        Voltar ao início
      </Link>


    </div>
  )
}

export default ErrorPage