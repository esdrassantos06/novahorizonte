import '../App.css'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl circularBlack text-gray-800">404</h1>
      <h2 className="text-4xl circularMedium text-gray-600 mb-4">Página Não Encontrada</h2>
      <p className="text-gray-500 circularBook mb-8">A página que procura não existe ou foi movida.</p>
    </div>
  )
}

export default ErrorPage