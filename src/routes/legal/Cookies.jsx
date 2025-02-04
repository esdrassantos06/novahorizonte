import Footer from "../../components/Footer";

function Cookies() {
    return (
        <>
            <div className="w-full mx-auto px-6 py-10 text-white flex flex-col items-center titilliumRegular bg-primary min-h-screen">
                <h1 className="text-5xl titilliumBold mb-6">Política de Cookies</h1>
                <p className="mb-4">Esta Política de Cookies explica como o <strong>Nova Horizonte</strong> utiliza cookies e tecnologias similares para reconhecer você quando visita nosso site.</p>

                <h2 className="text-2xl text-secondary font-semibold mt-6 mb-2">O que são Cookies?</h2>
                <p className="mb-4">Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site. Eles ajudam a melhorar a experiência do usuário, lembrando preferências e informações de navegação.</p>

                <h2 className="text-2xl text-secondary font-semibold mt-6 mb-2">Como Usamos os Cookies?</h2>
                <p className="mb-4">Utilizamos cookies para vários propósitos, incluindo:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Melhorar a experiência do usuário e personalizar o conteúdo.</li>
                    <li>Armazenar preferências do usuário para futuras visitas.</li>
                    <li>Fornecer análise de tráfego e métricas do site.</li>
                    <li>Permitir a exibição de anúncios relevantes.</li>
                </ul>

                <h2 className="text-2xl text-secondary font-semibold mt-6 mb-2">Tipos de Cookies que Utilizamos</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes usam o site.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site se lembre de escolhas feitas pelo usuário.</li>
                    <li><strong>Cookies de Publicidade:</strong> Utilizados para exibir anúncios mais relevantes.</li>
                </ul>

                <h2 className="text-2xl text-secondary font-semibold mt-6 mb-2">Gerenciamento de Cookies</h2>
                <p className="mb-4">Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. A maioria dos navegadores permite que você recuse ou exclua cookies quando desejar.</p>

                <h2 className="text-2xl text-secondary font-semibold mt-6 mb-2">Mais Informações</h2>
                <p className="mb-4">Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco pelo e-mail <strong>suporte@novahorizonte.com</strong>.</p>
            </div>
            <Footer />
        </>
    )
}
export default Cookies;