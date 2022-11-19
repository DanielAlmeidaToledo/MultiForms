import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";

export const FormResult = () => {
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <h1>Dados enviados! ✔️</h1>
        <p>Em breve entraremos em contato com você.</p>
        <hr />
        <p>
          Esse formulário em multi-etapas foi desenvolvido com intuito
          educacional. Obrigado por testar o meu software {state.name} ! 🚀✨
        </p>
        <p>
          Aqui estão algumas ferramentas usadas: React.JS, Typescript, Styled
          Components, Css, Context, Reducer, Provider, React Router.
        </p>
        <p>Meus contatos:</p>
        <div>
          <a href="https://wa.me/5515998485252" target="_blank">
            <BsWhatsapp size={30} fill="#34af23" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielalmeidadetoledo/"
            target="_blank"
          >
            <BsLinkedin size={30} fill="#0e76a8" />
          </a>
          <a href="https://github.com/DanielAlmeidaToledo" target="_blank">
            <BsGithub size={30} fill="#000" />
          </a>
        </div>
      </C.Container>
    </Theme>
  );
};
