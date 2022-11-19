import * as C from './styles';
import Logo from "../../media/logo.png";

export const Header = () => {
  return (
    <C.Container>
      <img src={Logo} alt="" />
      <h1>Cadastro de Candidatos</h1>
      <p>Faça seu cadastro e receba vagas disponíveis</p>
    </C.Container>
  );
};