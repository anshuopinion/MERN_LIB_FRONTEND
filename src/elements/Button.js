import { Button as btn } from "@material-ui/core";
import styled from "styled-components";

const Button = styled(btn)`
  background-color: ${(props) => props.theme.color.main};
  &:hover {
    background-color: ${(props) => props.theme.color.dark};
    color: ${(props) => props.theme.color.light};
    transition: 0.3s ease-in;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 0.3rem 3rem;
`;

export const HomeLoginButton = styled(Button)`
  width: 260px;
  height: 150px;
  font-size: 1.7rem;
  color: ${(props) => props.theme.color.light};
`;
