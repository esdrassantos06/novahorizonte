import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollComponent from "../components/ScrollComponent"

function QuemSomos() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-primary pt-20 min-h-screen">
        <section className="about-us-container flex w-full h-screen">
          <div className="basis-1/2 p-36 flex items-center h-full part-1">
            <div className="w-full flex flex-col items-center justify-center bg-primary">
              <div className="title-about-us mb-10">
                <h1 className="text-text circularBold text-6xl">Sobre <span className="text-secondary">Nós</span></h1>
              </div>
              <div className="text-text flex flex-col gap-2 text-base titilliumRegular paragraph-about-us">

                <p>Na Construtora Nova Horizonte, acreditamos que cada obra é mais do que uma estrutura física; é a materialização de sonhos, a base de futuros promissores. Com mais de 25 anos de experiência no mercado de construção civil, nos destacamos pela excelência, compromisso com prazos e qualidade incomparável.</p>

                <p>Nosso compromisso vai além da construção: buscamos inovar, sustentar e entregar soluções que respeitem o meio ambiente e promovam o desenvolvimento das comunidades onde atuamos. Na Nova Horizonte, estamos Construindo o Futuro, <strong>Tijolo por Tijolo</strong>.</p>
              </div>

            </div>
          </div>



          <div className="basis-1/2 flex items-center titilliumRegular part-2">
            <div className="w-4/5 p-40 pt-10 h-4/5 flex flex-col items-center justify-center bg-secondary">Teste</div>
          </div>

        </section>
        <div className="mb-2">
        <ScrollComponent />
        </div>

        <section className="our-mission-container w-full flex bg-secondary justify-center items-center h-screen">
          <div className="title-mission">
            <h1 className="text-text ">Nossa Missão</h1>
          </div>
        </section>


        <section className="our-team-container w-full flex justify-center bg-tertiary items-center h-[65vh]">
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