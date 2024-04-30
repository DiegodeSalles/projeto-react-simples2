import { ButtonContainer, ButtonBgColors } from "./styles";

interface ButtonProps {
  bgColor?: ButtonBgColors;
}

export function Button({ bgColor = "primary" }: ButtonProps) {
  return <ButtonContainer bgColor={bgColor}>Enviar</ButtonContainer>;
}
