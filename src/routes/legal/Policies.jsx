import Footer from "../../components/Footer";

function Policies() {
  return (
    <>
      <div className="text-text titilliumRegular bg-primary mx-auto flex min-h-screen w-full flex-col items-center px-6 py-10">
        <h1 className="titilliumBold mb-6 text-5xl">Política de Privacidade</h1>
        <p className="mb-4">
          A sua privacidade é importante para nós. É política da{" "}
          <strong>Nova Horizonte</strong> respeitar a sua privacidade em relação
          a qualquer informação sua que possamos coletar no site{" "}
          <strong>Nova Horizonte</strong>, e outros sites que possuímos e
          operamos.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Coleta de Informações
        </h2>
        <p className="mb-4">
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Retenção e Proteção de Dados
        </h2>
        <p className="mb-4 text-center">
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Compartilhamento de Informações
        </h2>
        <p className="mb-4">
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Links para Sites Externos
        </h2>
        <p className="mb-4">
          Nosso site pode ter links para sites externos que não são operados por
          nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Compromisso do Usuário
        </h2>
        <p className="mb-4">
          O usuário se compromete a fazer uso adequado dos conteúdos e
          informações que o <strong>Nova Horizonte</strong> oferece no site,
          incluindo mas não se limitando a:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Não se envolver em atividades ilegais ou contrárias à boa fé e à
            ordem pública.
          </li>
          <li>
            Não difundir propaganda ou conteúdo racista, xenofóbico, de azar,
            pornografia ilegal, apologia ao terrorismo ou contra os direitos
            humanos.
          </li>
          <li>
            Não causar danos aos sistemas físicos (hardware) e lógicos
            (software) do <strong>Nova Horizonte</strong> ou de terceiros.
          </li>
        </ul>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Mais Informações
        </h2>
        <p className="mb-4">
          Se houver algo que você não tem certeza se precisa ou não, geralmente
          é mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Policies;
