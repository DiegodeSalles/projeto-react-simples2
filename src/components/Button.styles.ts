import styled, { css } from "styled-components";

export type ButtonBgColors = "primary" | "secondary" | "danger" | "success";

export interface ButtonContainerProps {
  bgColor: ButtonBgColors;
}

const buttonColors = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;
  border: 0;

  ${(props) => {
    return css`
      background-color: ${buttonColors[props.bgColor]};
    `;
  }}
`;
