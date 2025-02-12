import { useState } from "react";
import Footer from "../components/Footer";
import { CheckCircle } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";

import emailjs from "@emailjs/browser";
// Estou utilizando a lib EmailJS para enviar o email

import { useNavigate } from "react-router-dom"; // Para navegar para pagina de agradecimento pelo envio

function Contact() {
  // Como esse é menor, não vou utilizar classes
  const servicos = [
    {
      title: "Instalação de HVAC",
    },
    {
      title: "Engenharia Estrutural",
    },
    {
      title: "Melhoria do Local",
    },
    {
      title: "Pós-Construção",
    },
  ];

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  }); //Armazenar dados do form

  const [errors, setErrors] = useState({});

  const regexPatterns = {
    name: /^[A-Za-zÀ-ú\s]{2,}$/,
    email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(\+351\s?)?\d{9}$/,
  }; // Regex para validar email, nome e telefone

  const validateField = (field, value) => {
    // value é o valor digitado pelo usuario

    let errorMsg = "";

    if (!regexPatterns[field].test(value.trim())) {
      if (field === "name")
        errorMsg = "Nome inválido! Use apenas letras e espaços.";
      if (field === "email")
        errorMsg = "Email inválido! Insira um email válido.";
      if (field === "phone")
        errorMsg = "Telefone inválido! Deve conter 9 dígitos, com ou sem +351.";

      //Caso o input não esteja de acordo com o regex, vai aparecer a mensagem de erro
    }
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (regexPatterns[id]) validateField(id, value);
  }; // é chamado quando o valor do input é alterado

  const templateParams = {
    from_name: formData.name,
    message: formData.details,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
  }; // Parâmetros do template que eu estou utilizando para fazer o envio do formulário

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(regexPatterns).forEach((field) => {
      if (!regexPatterns[field].test(formData[field].trim())) {
        newErrors[field] = "Campo inválido!";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      emailjs
        .send(
          "service_ez303t9",
          "template_r70fl89",
          templateParams,
          "HbWhhUXf0e_FdxCic",
        )
        .then(() => {
          // Limpar os inputs
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            details: "",
          });

          navigate("/obrigado-pelo-contacto"); // Redirecionar para a página de agradecimento
        })
        .catch((error) => {
          alert("Erro ao enviar o formulário, tente novamente.");
          console.error(error);
        });
    }
  }; // Se houver algum erro, ele será armazenado no estado error e vai aparecer abaixo do input que estiver errado

  return (
    <>
    <Navbar />
      <main className="w-full pt-20 flex items-center flex-col justify-center px-20 bg-primary min-h-screen">
        <div className="container mb-10 w-full items-center justify-center flex flex-col">
          <h1 className="text-6xl circularBold text-text">
            Liderança na Construção Civil e Engenharia
          </h1>
          <div className="icons-contact titilliumRegular flex space-x-4 p-2">
            <p className="gap-1 text-text flex">
              <CheckCircle size={24} color="#fefbfb" weight="fill" /> Equipa
              Profissional
            </p>
            <p className="gap-1 text-text flex">
              <CheckCircle size={24} color="#fefbfb" weight="fill" /> 100%
              Satisfação
            </p>
            <p className="gap-1 text-text flex">
              <CheckCircle size={24} color="#fefbfb" weight="fill" /> Testes
              Precisos
            </p>
            <p className="gap-1 text-text flex">
              <CheckCircle size={24} color="#fefbfb" weight="fill" /> Preços
              Transparentes
            </p>
          </div>
        </div>

        <div className="principal mb-10 space-x-5 w-full flex">
          <div className="container rounded-lg bg-secondary p-10 w-[60%] formDiv">
            <div className="title flex mb-5 flex-col">
              <h2 className="mb-5 text-text text-4xl circularBold">
                Solicitar um Orçamento
              </h2>
              <p className="w-[80%] titilliumRegular text-base text-text">
                Oferecemos aos nossos clientes os melhores preços e serviços com
                qualidade garantida. Orgulhamo-nos de tudo o que fazemos na Nova
                Horizonte.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex titilliumRegular w-full flex-col"
            >
              <div className="flex items-center gap-4 justify-between">
                <div className="mb-8 w-1/2 relative">
                  <input
                    title=""
                    type="text"
                    id="name"
                    className={`px-5 py-3 rounded-lg outline-secondary bg-white w-full ${errors.name ? "border-2 border-red-700" : ""} placeholder-custom`}
                    required
                    placeholder="Nome *"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="absolute left-0 bottom-[-24px] text-red-700 text-sm">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="mb-8 w-1/2 relative">
                  <input
                    title=""
                    type="email"
                    id="email"
                    className={`px-5 outline-secondary py-3 rounded-lg bg-white w-full ${errors.email ? "border-2 border-red-700" : ""} placeholder-custom`}
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="absolute left-0 bottom-[-24px] text-red-700 text-sm">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 justify-between">
                <div className="mb-8 w-1/2 relative">
                  <input
                    title=""
                    type="tel"
                    id="phone"
                    className={`px-5 outline-secondary py-3 rounded-lg bg-white w-full ${errors.phone ? "border-2 border-red-700" : ""} placeholder-custom`}
                    placeholder="Telefone *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="absolute left-0 bottom-[-24px] text-red-700 text-sm">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="mb-8 w-1/2">
                  <select
                    title=""
                    id="service"
                    className="w-full outline-secondary px-5 py-3 rounded-lg bg-white"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" className="text-gray-500">
                      Selecione o seu Serviço *
                    </option>
                    {servicos.map((servico, i) => (
                      <option
                        key={i}
                        value={servico.title}
                        className="text-black"
                      >
                        {servico.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="mb-8 w-full">
                  <textarea
                    id="details"
                    className="w-full outline-secondary rounded-lg bg-white px-5 py-3 h-40 resize-none"
                    placeholder="Detalhes Adicionais..."
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-primary transition-colors duration-200 cursor-pointer hover:bg-zinc-800 text-text px-5 py-3 rounded-lg"
                  aria-label="Submeter pedido"
                >
                  Submeter Pedido
                </button>
              </div>
            </form>
          </div>

          <div className="container rounded-lg contactDiv p-10 bg-secondary w-[40%]">
            <h1 className="mb-5 text-text text-4xl circularBold">Contactos</h1>

            <div className="info-contact mb-5">
              <h2 className="text-text text-xl circularMedium">
                Nossa Localização
              </h2>
              <p className="titilliumRegular text-base text-text">
                Avenida dos Construtores, 456, Porto, Portugal
              </p>
            </div>

            <div className="info-contact mb-5">
              <h2 className="text-text text-xl circularMedium">Contacto</h2>
              <div className="space-y-2">
                <p className="titilliumRegular text-base text-text">
                  novahorizonteempresa@gmail.com
                </p>
                <p className="titilliumRegular text-base text-text">
                  Telefone: (+351) 912 345 678
                </p>
              </div>
            </div>

            <div className="info-contact mb-5">
              <h2 className="text-text text-xl circularMedium">Horário</h2>
              <p className="titilliumRegular text-base text-text">
                Segunda - Sexta
              </p>
              <p className="titilliumBold  text-base text-text">
                09:00 - 19:00{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
