import styled, {css} from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "sucess";

interface ButtonColors {
  variant: ButtonVariant
}

const ButtonColor = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'brown',
    sucess: 'ligth-green'
}
export const ButtonContainer = styled.button<ButtonColors>`
  width: 130px;
  height: 40px;

  ${props => {
    return css`background-color: ${ButtonColor[props.variant]}`;
  }}
`;