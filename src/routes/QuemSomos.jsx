import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function QuemSomos() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-primary pt-20 min-h-screen">
        <section className="about-us-container w-full flex h-[80vh]">

          <div className="w-full flex items-center justify-center bg-secondary">
            <div className="title-about-us">
              <h1 className="text-text ">Sobre Nós</h1>
            </div>
          </div>
        </section>

        <section className="our-mission-container w-full flex justify-center items-center h-screen">
          <div className="title-mission">
            <h1 className="text-text ">Nossa Missão</h1>
          </div>
        </section>


        <section className="our-team-container w-full flex justify-center bg-secondary items-center h-[65vh]">
          <div className="title-our-team">
            <h1 className="text-text ">Nosso Time</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default QuemSomos