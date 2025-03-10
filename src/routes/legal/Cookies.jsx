import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Cookies = () => {
  return (
    <>
      <Navbar />
      <div className="text-text titilliumRegular bg-primary mx-auto flex min-h-screen w-full flex-col items-center mt-20">
        <h1 className="titilliumBold text-center mb-6 text-5xl">Política de Cookies</h1>
        <p className="mb-4 text-center">
          Esta Política de Cookies explica como a{" "}
          <strong>Nova Horizonte</strong> utiliza cookies e tecnologias
          similares para reconhecer você quando visita nosso site.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          O que são Cookies?
        </h2>
        <p className="mb-4 text-center">
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo
          quando você acessa um site. Eles ajudam a melhorar a experiência do
          usuário, lembrando preferências e informações de navegação.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Como Usamos os Cookies?
        </h2>
        <p className="mb-4 text-center">
          Utilizamos cookies para vários propósitos, incluindo:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Melhorar a experiência do usuário e personalizar o conteúdo.</li>
          <li>Armazenar preferências do usuário para futuras visitas.</li>
          <li>Fornecer análise de tráfego e métricas do site.</li>
          <li>Permitir a exibição de anúncios relevantes.</li>
        </ul>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Tipos de Cookies que Utilizamos
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Cookies Essenciais:</strong> Necessários para o
            funcionamento básico do site.
          </li>
          <li>
            <strong>Cookies de Desempenho:</strong> Coletam informações sobre
            como os visitantes usam o site.
          </li>
          <li>
            <strong>Cookies de Funcionalidade:</strong> Permitem que o site se
            lembre de escolhas feitas pelo usuário.
          </li>
        </ul>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Gerenciamento de Cookies
        </h2>
        <p className="mb-4 text-center">
          Você pode gerenciar suas preferências de cookies através das
          configurações do seu navegador. A maioria dos navegadores permite que
          você recuse ou exclua cookies quando desejar.
        </p>

        <h2 className="text-secondary mt-6 mb-2 text-2xl font-semibold">
          Mais Informações
        </h2>
        <p className="mb-4 text-center">
          Se você tiver dúvidas sobre nossa Política de Cookies, entre em
          contato conosco pelo e-mail <strong>novahorizonteempresa@gmail.com</strong>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Cookies;
