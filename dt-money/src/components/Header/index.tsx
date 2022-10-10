import logoImg from "../../assets/logo.svg";
import { ButtonTransaction, HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <ButtonTransaction>Nova transação</ButtonTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}