import styled from "styled-components";

export type ButtonBgColors = "primary" | "secondary" | "danger" | "success";

export interface ButtonContainerProps {
  bgColor: ButtonBgColors;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;
  border: 0;
  border-radius: 4px;
  margin: 4px;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
`;
