import { useState } from "react";
import Footer from "../components/Footer";
import { CheckCircle } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";

import emailjs from "@emailjs/browser";
// Estou utilizando a lib EmailJS para enviar o email

import { useNavigate } from "react-router-dom"; // Para navegar para pagina de agradecimento pelo envio

function Contact() {


  const checkItems = [
    {
      title: "Equipa Profissional",
    },
    {
      title: "100% Satisfação",
    },
    {
      title: "Testes Precisos",
    },
    {
      title: "Preços Transparentes",
    }
  ];


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

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};
    // Verificar se há erros
    
    Object.keys(regexPatterns).forEach((field) => {
      if (!regexPatterns[field].test(formData[field].trim())) {
        newErrors[field] = "Campo inválido!";
      }
    });


    const templateParams = {
      from_name: formData.name,
      message: formData.details,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
    }; // Parâmetros do template que eu estou utilizando para fazer o envio do formulário

    // Se houver erros, atualizar o estado de erros
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      emailjs.send(
          "service_ez303t9",
          "template_r70fl89",
          templateParams,
          "HbWhhUXf0e_FdxCic",
        ).then(() => {
          // Limpar os inputs
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            details: "",
          });

          navigate("/obrigado-pelo-contacto");
        })
        .catch( () => {
          alert("Erro ao enviar o formulário, tente novamente.");
        });
    }
  }; // Se houver algum erro, ele será armazenado no estado error e vai aparecer abaixo do input que estiver errado

  return (
    <>
      <Navbar />
      <main className="bg-primary flex min-h-screen w-full flex-col items-center justify-center px-20 pt-20">
        <div className="container mb-10 flex w-full flex-col items-center justify-center">
          <h1 className="circularBold text-text text-6xl">
            Liderança na Construção Civil e Engenharia
          </h1>
          <div className="icons-contact titilliumRegular flex space-x-4 p-2">
          {checkItems.map( (item, index) => (
            <p className="text-text flex gap-1" key={index}>
              <CheckCircle size={24} color="#fefbfb" weight="fill" /> {item.title}
            </p>
          ))}
          </div>
        </div>

        <div className="principal mb-10 flex w-full space-x-5">
          <div className="bg-secondary formDiv container w-[60%] rounded-lg p-10">
            <div className="title mb-5 flex flex-col">
              <h2 className="text-text circularBold mb-5 text-4xl">
                Solicitar um Orçamento
              </h2>
              <p className="titilliumRegular text-text w-[80%] text-base">
                Oferecemos aos nossos clientes os melhores preços e serviços com
                qualidade garantida. Orgulhamo-nos de tudo o que fazemos na Nova
                Horizonte.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="titilliumRegular flex w-full flex-col"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="relative mb-8 w-1/2">
                  <input
                    title=""
                    type="text"
                    id="name"
                    className={`outline-secondary w-full rounded-lg bg-white px-5 py-3 ${errors.name ? "border-2 border-red-700" : ""} placeholder-custom`}
                    required
                    placeholder="Nome *"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="absolute bottom-[-24px] left-0 text-sm text-red-700">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="relative mb-8 w-1/2">
                  <input
                    title=""
                    type="email"
                    id="email"
                    className={`outline-secondary w-full rounded-lg bg-white px-5 py-3 ${errors.email ? "border-2 border-red-700" : ""} placeholder-custom`}
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="absolute bottom-[-24px] left-0 text-sm text-red-700">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="relative mb-8 w-1/2">
                  <input
                    title=""
                    type="tel"
                    id="phone"
                    className={`outline-secondary w-full rounded-lg bg-white px-5 py-3 ${errors.phone ? "border-2 border-red-700" : ""} placeholder-custom`}
                    placeholder="Telefone *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="absolute bottom-[-24px] left-0 text-sm text-red-700">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="mb-8 w-1/2">
                  <select
                    title=""
                    id="service"
                    className="outline-secondary w-full rounded-lg bg-white px-5 py-3"
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
                    className="outline-secondary h-40 w-full resize-none rounded-lg bg-white px-5 py-3"
                    placeholder="Detalhes Adicionais..."
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-primary text-text flex w-full cursor-pointer items-center justify-center rounded-lg px-5 py-3 transition-colors duration-200 hover:bg-zinc-800"
                  aria-label="Submeter pedido"
                >
                  Submeter Pedido
                </button>
              </div>
            </form>
          </div>

          <div className="contactDiv bg-secondary container w-[40%] rounded-lg p-10">
            <h1 className="text-text circularBold mb-5 text-4xl">Contactos</h1>

            <div className="info-contact mb-5">
              <h2 className="text-text circularMedium text-xl">
                Nossa Localização
              </h2>
              <p className="titilliumRegular text-text text-base">
                Avenida dos Construtores, 456, Porto, Portugal
              </p>
            </div>

            <div className="info-contact mb-5">
              <h2 className="text-text circularMedium text-xl">Contacto</h2>
              <div className="space-y-2">
                <p className="titilliumRegular text-text text-base">
                  novahorizonteempresa@gmail.com
                </p>
                <p className="titilliumRegular text-text text-base">
                  Telefone: (+351) 912 345 678
                </p>
              </div>
            </div>

            <div className="info-contact mb-5">
              <h2 className="text-text circularMedium text-xl">Horário</h2>
              <p className="titilliumRegular text-text text-base">
                Segunda - Sexta
              </p>
              <p className="titilliumBold text-text text-base">
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
