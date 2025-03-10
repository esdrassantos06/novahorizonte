import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function legalWarning() {
  return (
    <>
      <Navbar />
      <div className="text-text titilliumRegular bg-primary mx-auto flex min-h-screen w-full flex-col items-center px-6 py-10 pt-20">
        <h1 className="titilliumBold mb-6 text-center text-5xl">Aviso Legal</h1>
        <p className="mb-4">
          Este Aviso Legal regula o acesso, a navegação e a utilização deste
          website (doravante, o “Website”).
        </p>

        <h2 className="text-secondary text-center mt-6 mb-2 text-2xl font-semibold">
          Direito à Informação
        </h2>
        <p className="mb-4 text-center">
          Em conformidade com as normas vigentes, informamos que o Website é
          propriedade da <strong>Nova Horizonte</strong>, com sede em Avenida
          dos Construtores, 456, Porto, Portugal Para contato, utilize o e-mail: {" "}
          <strong>novahorizonteempresa@gmail.com</strong>
        </p>

        <h2 className="text-secondary text-center mt-6 mb-2 text-2xl font-semibold">
          Usuários
        </h2>
        <p className="mb-4 text-center">
          O acesso e/ou utilização do Website confere-lhe o estatuto de Usuário,
          aceitando, a partir desse acesso e/ou utilização, este Aviso Legal.
        </p>

        <h2 className="text-secondary text-center mt-6 mb-2 text-2xl font-semibold">
          Uso do Website
        </h2>
        <p className="mb-4 text-center">
          O usuário se compromete a fazer uso adequado do conteúdo e das
          informações oferecidas na <strong>Nova Horizonte</strong>, incluindo,
          mas não se limitando a:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Não se envolver em atividades ilícitas ou contrárias à ordem
            pública.
          </li>
          <li>
            Não difundir conteúdo racista, xenofóbico, pornográfico ilegal ou
            que promova ódio ou violência.
          </li>
          <li>
            Não causar danos aos sistemas físicos (hardware) e lógicos
            (software) da <strong>Nova Horizonte</strong> ou de terceiros.
          </li>
        </ul>

        <h2 className="text-secondary text-center mt-6 mb-2 text-2xl font-semibold">
          Propriedade Intelectual
        </h2>
        <p className="mb-4 text-center">
          Todos os direitos de propriedade intelectual do conteúdo deste Website
          pertencem exclusivamente à <strong>Nova Horizonte</strong> ou a
          terceiros que autorizaram seu uso. É proibida a reprodução,
          distribuição ou modificação sem a devida autorização.
        </p>

        <h2 className="text-secondary text-center mt-6 mb-2 text-2xl font-semibold">
          Responsabilidade e Garantias
        </h2>
        <p className="mb-4 text-center">
          A <strong>Nova Horizonte</strong> não garante que o Website estará
          livre de erros, vírus ou componentes prejudiciais. Não nos
          responsabilizamos por eventuais danos causados pelo uso indevido do
          Website.
        </p>

        <h2 className="text-secondary text-center mt-6 mb-2 text-2xl font-semibold">
          Links para Sites Externos
        </h2>
        <p className="mb-4 text-center">
          Nosso site pode conter links para sites de terceiros. Não nos
          responsabilizamos pelo conteúdo e políticas desses sites.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Modificações
        </h2>
        <p className="mb-4 text-center">
          A <strong>Nova Horizonte</strong> reserva-se o direito de modificar
          este Aviso Legal a qualquer momento. O uso contínuo do Website implica
          na aceitação das condições atualizadas.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default legalWarning;
