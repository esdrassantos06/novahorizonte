import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Obras() {
  return (

    <>
      <Navbar />


      <main className="w-full pt-20 flex items-center bg-secondary min-h-screen">

        <div className="container p-20 flex w-full">
          <h1 className="text-primary text-5xl circularBold">Obras Em Destaque</h1>
        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default Obras